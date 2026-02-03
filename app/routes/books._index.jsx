import { useState, useEffect } from 'react';
import { getAllCollections, getCollectionBySlug, enrichBook } from '../data/booksData';
import { fetchFromLOTRAPI } from '../utils/api';
import { getBookCoverPath, handleImageError } from '../utils/imageHelpers';

export const meta = () => {
    return [
        { title: 'Books - LOTR Blog' },
        { name: 'description', content: 'Explore collections of Lord of the Rings books' }
    ];
};

export default function Books() {
    const [activeTab, setActiveTab] = useState('original-trilogy');
    const [booksData, setBooksData] = useState({});
    const [loading, setLoading] = useState({});

    const collections = getAllCollections();

    const colors = {
        accent: '#eedda0',
    };

    // Load books for a specific collection
    const loadBooksForCollection = async (slug) => {
        // If already loaded, don't fetch again
        if (booksData[slug]) return;

        setLoading(prev => ({ ...prev, [slug]: true }));

        try {
            const collection = getCollectionBySlug(slug);

            if (slug === 'original-trilogy') {
                // Fetch from API and enrich
                const data = await fetchFromLOTRAPI('book');
                const enrichedBooks = data.docs.map(book => enrichBook(book));
                setBooksData(prev => ({ ...prev, [slug]: enrichedBooks }));
            } else {
                // Use manual data
                setBooksData(prev => ({ ...prev, [slug]: collection.books }));
            }
        } catch (error) {
            console.error(`Failed to load ${slug}:`, error);
            setBooksData(prev => ({ ...prev, [slug]: [] }));
        } finally {
            setLoading(prev => ({ ...prev, [slug]: false }));
        }
    };

    // Load books for the first tab on mount
    useEffect(() => {
        loadBooksForCollection('original-trilogy');
    }, []);

    // Handle tab click
    const handleTabClick = (slug) => {
        setActiveTab(slug);
        loadBooksForCollection(slug);
    };

    return (
        <div className="container py-5">
            <h1 className="display-5 mb-2" style={{ color: colors.accent }}>
                Book Collections
            </h1>
            <p className="lead text-muted mb-4">
                Explore the complete works of Middle-earth
            </p>

            <div className="d-flex align-items-start tabs-layout">
                {/* Navigation Tabs - vertical on desktop, horizontal scroll on mobile */}
                <div
                    className="nav flex-column nav-pills me-4 tab-sidebar"
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
                    {collections.map(({ slug, name, description }) => {
                        const books = booksData[slug] || [];
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
                                </div>

                                {/* Loading State */}
                                {isLoading && (
                                    <div className="text-center py-5">
                                        <div className="spinner-border" style={{ color: colors.accent }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <p className="mt-3 text-muted">Loading books...</p>
                                    </div>
                                )}

                                {/* Books Grid */}
                                {!isLoading && books.length === 0 && (
                                    <div className="card bg-dark" style={{ borderColor: colors.accent }}>
                                        <div className="card-body text-center p-5">
                                            <p className="text-muted mb-0">No books found in this collection.</p>
                                        </div>
                                    </div>
                                )}

                                {!isLoading && books.length > 0 && (
                                    <div className="row g-4">
                                        {books.map(book => {
                                            const coverImage = getBookCoverPath(book.name, book.coverImage);

                                            return (
                                                <div key={book._id} className="col-md-6 col-lg-4">
                                                    <div
                                                        className="card h-100 bg-dark"
                                                        style={{ borderColor: colors.accent }}
                                                    >
                                                        <img
                                                            src={coverImage}
                                                            alt={`${book.name} cover`}
                                                            className="card-img-top book-card-img"
                                                            loading="lazy"
                                                            style={{
                                                                height: '350px',
                                                                objectFit: 'contain',
                                                                borderBottom: `2px solid ${colors.accent}`
                                                            }}
                                                            onError={handleImageError}
                                                        />

                                                        <div className="card-body">
                                                            {book.volume && (
                                                                <span
                                                                    className="badge mb-2"
                                                                    style={{
                                                                        backgroundColor: colors.accent,
                                                                        color: '#060010'
                                                                    }}
                                                                >
                                                                    Volume {book.volume}
                                                                </span>
                                                            )}

                                                            <h5 className="card-title mb-3" style={{ color: colors.accent }}>
                                                                {book.name}
                                                            </h5>

                                                            {book.author && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Author:</strong> {book.author}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {book.editor && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Editor:</strong> {book.editor}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {book.publishedYear && (
                                                                <p className="text-muted mb-2">
                                                                    <small>
                                                                        <strong>Published:</strong> {book.publishedYear}
                                                                    </small>
                                                                </p>
                                                            )}

                                                            {book.description && (
                                                                <p className="card-text text-muted mt-3 small">
                                                                    {book.description}
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