import { useState, useEffect } from 'react';
import { Link } from "react-router";
import { fetchFromLOTRAPI } from '../utils/api';

export const meta = () => {
    return [
        { title: 'Movies - LOTR Blog' },
        { name: 'description', content: 'Explore collections of Lord of the Rings Movies' }
    ];
};


export default function Series() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const colors = {
        accent: '#eedda0',
    };

    useEffect(() => {
        async function loadMovies() {
            try {
                setLoading(true);

                const data = await fetchFromLOTRAPI('movie');
                console.log('Movies data:', data);

                const seriesMovies = data.docs.filter(movie =>
                    movie.name.includes('series') || movie.name.includes('Series')
                );

                console.log('Filtered series:', seriesMovies);
                setMovies(seriesMovies);

            }
            catch (err) {
                console.error('Failed to load movies:', err);
                setError('Failed to load movies');
            } finally {
                setLoading(false)
            }
        }
        loadMovies();
    }, []);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border" style={{ color: colors.accent }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading movies...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }
    return (
        <div className="container py-4">
            <h1 className="display-5 mb-4" style={{ color: colors.accent }}>
                Movies
            </h1>

            <div className="row g-4">
                {movies.map(movie => (
                    <Link>
                        <div key={movie._id} className="col-md-6 col-lg-4">
                            <div className="card bg-dark" style={{ borderColor: colors.accent }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: colors.accent }}>
                                        {movie.name}
                                    </h5>
                                    {movie.runtimeInMinutes && (
                                        <p className="text-muted mb-2">
                                            <small>Runtime: {movie.runtimeInMinutes} minutes</small>
                                        </p>
                                    )}
                                    {movie.budgetInMillions && (
                                        <p className="text-muted mb-2">
                                            <small>Budget: ${movie.budgetInMillions}M</small>
                                        </p>
                                    )}
                                    {movie.boxOfficeRevenueInMillions && (
                                        <p className="text-muted mb-0">
                                            <small>Box Office: ${movie.boxOfficeRevenueInMillions}M</small>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}