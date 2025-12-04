import { Link } from "react-router";
import { getAllCollections } from '../data/booksData';

export const meta = () => {
    return [
        { title: 'Books - LOTR Blog' },
        { name: 'description', content: 'Explore collections of Lord of the Rings books' }
    ];
};

export default function Books() {
    const collections = getAllCollections();

    const colors = {
        accent: '#eedda0',
    };

    return (
        <div className="container pt-3 pb-2">
            <h1 className="display-5 mb-1" style={{ color: colors.accent, "overflow": "scroll" }}>
                Book Collections
            </h1>
            <p className="lead text-muted mb-5">
                Explore the complete works of Middle-earth
            </p>

            <div className="row g-4">
                {collections.map(({ slug, name, image, description }) => (
                    <div key={slug} className="col-md-6 col-lg-4">
                        <Link
                            to={`/books/${slug}`}
                            className="text-decoration-none"
                        >
                            <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                                <img
                                    src={image}
                                    className="card-img-top"
                                    alt={name}
                                    style={{
                                        height: '300px',
                                        objectFit: 'cover',
                                        borderBottom: `2px solid ${colors.accent}`
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: colors.accent }}>
                                        {name}
                                    </h5>
                                    <p className="card-text text-muted">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

