import { useState, useEffect } from "react";
import { fetchFromLOTRAPI } from "../utils/api";


export default function Quotes() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quotes, setQuotes] = useState([]);
    const [characterMap, setCharacterMap] = useState({});
    const [movieMap, setMovieMap] = useState({});

    const colors = {
        accent: '#eedda0',
    };

    useEffect(() => {
        async function loadQuotes() {
            try {
                setLoading(true);
                const [quoteData, characterData, movieData] = await Promise.all([
                    fetchFromLOTRAPI('quote'),
                    fetchFromLOTRAPI('character'),
                    fetchFromLOTRAPI('movie'),
                ]);
                console.log(quoteData.docs);



                setQuotes(quoteData.docs);

                const charLookup = {};
                characterData.docs.forEach(c => { charLookup[c._id] = c.name; });
                setCharacterMap(charLookup);

                const movieLookup = {};
                movieData.docs.forEach(m => { movieLookup[m._id] = m.name; });
                setMovieMap(movieLookup);
            } catch (error) {
                setError(`Error: ${error.message}`)
            } finally {
                setLoading(false)
            }
        }
        loadQuotes();
    }, []);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border" style={{ color: colors.accent }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading quotes...</p>
            </div>
        );
    }

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
        <div className="container py-5">
            <h1 className="display-5 mb-2" style={{ color: colors.accent }}>
                Quotes
            </h1>
            <p className="lead text-muted mb-4">
                Famous quotes from Middle-earth
            </p>
            <div className="row g-4">
                {quotes.map(({ _id, dialog, character, movie }) => (
                    <div key={_id} className="col-md-6 col-lg-4">
                        <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                            <div className="card-body">
                                <p className="card-text mb-3" style={{ color: colors.accent, fontStyle: 'italic' }}>
                                    "{dialog}"
                                </p>
                                {characterMap[character] && (
                                    <p className="text-muted mb-1">
                                        <small><strong>Character:</strong> {characterMap[character]}</small>
                                    </p>
                                )}
                                {movieMap[movie] && (
                                    <p className="text-muted mb-0">
                                        <small><strong>Movie:</strong> {movieMap[movie]}</small>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}