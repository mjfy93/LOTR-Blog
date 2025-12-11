import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';
import { getCollectionBySlug, enrichBook } from '../data/booksData';
import { fetchFromLOTRAPI } from '../utils/api';
import { getBookCoverPath, handleImageError } from '../utils/imageHelpers';

export const meta = ({ params }) => {
    const collection = getCollectionBySlug(params.collection);
    return [
        { title: `${collection?.name || 'Collection'} - LOTR Blog` },
        { name: 'description', content: `Explore ${collection?.name || 'books'} from Middle-earth` }
    ];
};

export default function Collection() {
    const { collection: collectionSlug } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const colors = {
        accent: '#eedda0',
    };


    const collection = getCollectionBySlug(collectionSlug);

    useEffect(() => {
        async function loadBooks() {
            try {
                setLoading(true);

                if (!collection) {
                    setError('Collection not found');
                    setLoading(false);
                    return;
                }


                if (collection.slug === 'original-trilogy') {
                    const data = await fetchFromLOTRAPI('book');
                    const enrichedBooks = data.docs.map(book => enrichBook(book));
                    setBooks(enrichedBooks);
                } else {

                    setBooks(collection.books);
                }
            } catch (err) {
                console.error('Failed to load books:', err);
                setError('Failed to load books');
            } finally {
                setLoading(false);
            }
        }

        loadBooks();
    }, [collectionSlug, collection]);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border" style={{ color: colors.accent }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading books...</p>
            </div>
        );
    }

    if (error || !collection) {
        return (
            <div className="container py-5 text-center">
                <div className="card bg-dark" style={{ borderColor: colors.accent, maxWidth: '500px', margin: '0 auto' }}>
                    <div className="card-body p-5">
                        <h1 className="display-1 mb-3" style={{ color: colors.accent }}>404</h1>
                        <h2 className="h4 mb-3" style={{ color: colors.accent }}>Collection Not Found</h2>
                        <p className="text-muted mb-4">
                            The collection you're looking for doesn't exist.
                        </p>
                        <Link
                            to="/books"
                            className="btn"
                            style={{
                                backgroundColor: colors.accent,
                                color: '#060010',
                                border: 'none'
                            }}
                        >
                            Back to Collections
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="container py-5">

            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/books" style={{ color: colors.accent }}>Collections</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {collection.name}
                    </li>
                </ol>
            </nav>


            <div className="mb-5">
                <h1 className="display-5 mb-3" style={{ color: colors.accent }}>
                    {collection.name}
                </h1>
                <p className="lead text-muted">
                    {collection.description}
                </p>
            </div>


            {books.length === 0 ? (
                <div className="card bg-dark" style={{ borderColor: colors.accent }}>
                    <div className="card-body text-center p-5">
                        <p className="text-muted mb-0">No books found in this collection.</p>
                    </div>
                </div>
            ) : (
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
                                        className="card-img-top"
                                        style={{
                                            height: '400px',
                                            objectFit: 'contain',
                                            borderBottom: `2px solid ${colors.accent}`
                                        }}
                                        onError={handleImageError}
                                    />

                                    <div className="card-body">
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

                                        {book.publishedYear && (
                                            <p className="text-muted mb-2">
                                                <small>
                                                    <strong>Published:</strong> {book.publishedYear}
                                                </small>
                                            </p>
                                        )}

                                        {book.description && (
                                            <p className="card-text text-muted mt-3">
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


            <div className="mt-5">
                <Link
                    to="/books"
                    className="btn"
                    style={{
                        backgroundColor: 'transparent',
                        color: colors.accent,
                        border: `1px solid ${colors.accent}`
                    }}
                >
                    ← Back to Collections
                </Link>
            </div>
        </div>
    );
}