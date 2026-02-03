import { useState, useEffect } from 'react';
import {
    getAllCollections,
    getCollectionBySlug,
    enrichMovie,
    filterMoviesByCollection
} from '../data/moviesData';
import { fetchFromLOTRAPI } from '../utils/api';
import { getMoviePosterPath, handleImageError } from '../utils/imageHelpers';

export const meta = () => {
    return [
        { title: 'Movies & TV Shows - LOTR Blog' },
        { name: 'description', content: 'Explore Lord of the Rings films and television adaptations' }
    ];
};

export default function Movies() {
    const [activeTab, setActiveTab] = useState('lotr-trilogy');
    const [moviesData, setMoviesData] = useState({});
    const [loading, setLoading] = useState({});

    const collections = getAllCollections();

    const colors = {
        accent: '#eedda0',
    };


    const loadMoviesForCollection = async (slug) => {


        setLoading(prev => ({ ...prev, [slug]: true }));

        try {
            const collection = getCollectionBySlug(slug);

            if (slug === 'lotr-trilogy' || slug === 'hobbit-trilogy') {

                const data = await fetchFromLOTRAPI('movie');
                const filteredMovies = filterMoviesByCollection(data.docs, slug);
                const enrichedMovies = filteredMovies.map(movie => enrichMovie(movie));
                const sortedMovies = enrichedMovies.sort((a, b) => a.releaseYear - b.releaseYear);
                setMoviesData(prev => ({ ...prev, [slug]: sortedMovies }));
            } else {

                const movies = collection.movies;


                const sortedMovies = movies.sort((a, b) => a.releaseYear - b.releaseYear);
                setMoviesData(prev => ({ ...prev, [slug]: sortedMovies }));
            }
        } catch (error) {
            console.error(`Failed to load ${slug}:`, error);
            setMoviesData(prev => ({ ...prev, [slug]: [] }));
        } finally {
            setLoading(prev => ({ ...prev, [slug]: false }));
        }
    };

    // Load movies for the first tab on mount
    useEffect(() => {
        loadMoviesForCollection('lotr-trilogy');
    }, []);

    // Handle tab click
    const handleTabClick = (slug) => {
        setActiveTab(slug);
        loadMoviesForCollection(slug);
    };

    return (
        <div className="container py-5">
            <h1 className="display-5 mb-2" style={{ color: colors.accent }}>
                Movies & TV Shows
            </h1>
            <p className="lead text-muted mb-4">
                Explore adaptations of Middle-earth across film and television
            </p>

            <div className="d-flex align-items-start tabs-layout">
                {/* Navigation Tabs - vertical on desktop, horizontal scroll on mobile */}
                <div
                    className="nav flex-column nav-pills me-4 tab-sidebar-movies"
                    role="tablist"
                    aria-orientation="vertical"
                >
                    {collections.map(({ slug, name }) => (
                        <button
                            key={slug}
                            className={`nav-link ${activeTab === slug ? 'active' : ''}`}
                            type="button"
                            role="tab"
                            aria-controls={`${slug}-content`}
                            aria-selected={activeTab === slug}
                            onClick={() => handleTabClick(slug)}
                            style={{
                                backgroundColor: activeTab === slug ? colors.accent : 'transparent',
                                color: activeTab === slug ? '#060010' : colors.accent,
                                border: `1px solid ${colors.accent}`,
                                marginBottom: '0.5rem',
                                textAlign: 'left'
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex-grow-1">
                    {collections.map(({ slug, name, description, type }) => {
                        const movies = moviesData[slug] || [];
                        const isLoading = loading[slug];
                        const isActive = activeTab === slug;

                        // Only render active tab content
                        if (!isActive) return null;

                        return (
                            <div
                                key={slug}
                                role="tabpanel"
                                aria-labelledby={`${slug}-tab`}
                            >
                                {/* Collection Header */}
                                <div className="mb-4">
                                    <h2 className="h3 mb-2" style={{ color: colors.accent }}>
                                        {name}
                                    </h2>
                                    <p className="text-muted">{description}</p>
                                    {type && (
                                        <span
                                            className="badge"
                                            style={{
                                                backgroundColor: colors.accent,
                                                color: '#060010'
                                            }}
                                        >
                                            {type === 'film-series' ? 'Film Series' :
                                                type === 'tv-series' ? 'TV Series' : 'Mixed Media'}
                                        </span>
                                    )}
                                </div>

                                {/* Loading State */}
                                {isLoading && (
                                    <div className="text-center py-5">
                                        <div className="spinner-border" style={{ color: colors.accent }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="mt-3 text-muted">Loading...</p>
                                    </div>
                                )}

                                {/* Movies Grid */}
                                {!isLoading && movies.length === 0 && (
                                    <div className="card bg-dark" style={{ borderColor: colors.accent }}>
                                        <div className="card-body text-center p-5">
                                            <p className="text-muted mb-0">No content found in this collection.</p>
                                        </div>
                                    </div>
                                )}

                                {!isLoading && movies.length > 0 && (
                                    <div className="row g-4">
                                        {movies.map(movie => {
                                            const posterImage = getMoviePosterPath(movie.name, movie.posterImage);

                                            return (
                                                <div key={movie._id} className="col-md-6 col-lg-4">
                                                    <div
                                                        className="card h-100 bg-dark"
                                                        style={{ borderColor: colors.accent }}
                                                    >
                                                        <img
                                                            src={posterImage}
                                                            alt={`${movie.name} poster`}
                                                            className="card-img-top movie-card-img"
                                                            loading="lazy"
                                                            style={{
                                                                height: '400px',
                                                                objectFit: 'cover',
                                                                borderBottom: `2px solid ${colors.accent}`
                                                            }}
                                                            onError={(e) => handleImageError(e, 'movies')}
                                                        />

                                                        <div className="card-body">
                                                            <h5 className="card-title mb-3" style={{ color: colors.accent }}>
                                                                {movie.name}
                                                            </h5>

                                                            {movie.releaseYear && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Released:</strong> {movie.releaseYear}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.director && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Director:</strong> {movie.director}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.runtimeInMinutes && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Runtime:</strong> {movie.runtimeInMinutes} minutes
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.episodes && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Episodes:</strong> {movie.episodes}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.network && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Network:</strong> {movie.network}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.country && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Country:</strong> {movie.country}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.budgetInMillions && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Budget:</strong> ${movie.budgetInMillions}M
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.boxOfficeRevenueInMillions && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Box Office:</strong> ${movie.boxOfficeRevenueInMillions}M
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.rottenTomatoesScore && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>RT Score:</strong> {movie.rottenTomatoesScore}%
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.academyAwardWins > 0 && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Academy Awards:</strong> {movie.academyAwardWins} wins, {movie.academyAwardNominations} nominations
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {movie.description && (
                                                                <p className="card-text text-muted mt-3 small">
                                                                    {movie.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}