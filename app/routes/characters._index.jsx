import { useState, useEffect } from 'react';
import { fetchFromLOTRAPI } from '../utils/api';

export const meta = () => {
    return [
        { title: 'Characters - LOTR Blog' },
        { name: 'description', content: 'Explore Lord of the Rings characters' }
    ];
};

export default function Characters() {
    const [loading, setLoading] = useState(true);
    const [allCharacters, setAllCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [activeLetter, setActiveLetter] = useState('A');
    const [error, setError] = useState(null);

    const colors = {
        accent: '#eedda0',
    };

    // Generate A-Z array
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    // Load all characters once
    useEffect(() => {
        async function loadCharacters() {
            try {
                setLoading(true);
                const data = await fetchFromLOTRAPI('character');
                console.log('Characters data:', data);

                // Sort alphabetically by name
                const sorted = data.docs.sort((a, b) => a.name.localeCompare(b.name));
                setAllCharacters(sorted);

                // Filter for 'A' by default
                filterByLetter('A', sorted);

            } catch (error) {
                console.error('Failed to load characters:', error);
                setError('Failed to load characters');
            } finally {
                setLoading(false);
            }
        }

        loadCharacters();
    }, []);

    // Filter characters by letter
    const filterByLetter = (letter, charactersToFilter = allCharacters) => {
        setActiveLetter(letter);
        const filtered = charactersToFilter.filter(char =>
            char.name.toUpperCase().startsWith(letter)
        );
        setFilteredCharacters(filtered);
    };

    // Count characters per letter (for showing counts)
    const getCharacterCountForLetter = (letter) => {
        return allCharacters.filter(char =>
            char.name.toUpperCase().startsWith(letter)
        ).length;
    };

    // Loading state
    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border" style={{ color: colors.accent }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading characters...</p>
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

    // Main content
    return (
        <div className="container py-5">
            <h1 className="display-5 mb-2" style={{ color: colors.accent }}>
                Characters
            </h1>
            <p className="lead text-muted mb-4">
                Explore the {allCharacters.length} characters of Middle-earth
            </p>

            {/* Alphabetical Filter Buttons */}
            <div className="mb-4">
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {alphabet.map(letter => {
                        const count = getCharacterCountForLetter(letter);
                        const hasCharacters = count > 0;

                        return (
                            <button
                                key={letter}
                                onClick={() => filterByLetter(letter)}
                                disabled={!hasCharacters}
                                className="btn alpha-btn"
                                style={{
                                    backgroundColor: activeLetter === letter ? colors.accent : 'transparent',
                                    color: activeLetter === letter ? '#060010' : (hasCharacters ? colors.accent : '#666'),
                                    border: `1px solid ${activeLetter === letter ? colors.accent : (hasCharacters ? colors.accent : '#666')}`,
                                    minWidth: '45px',
                                    fontWeight: activeLetter === letter ? 'bold' : 'normal',
                                    opacity: hasCharacters ? 1 : 0.3,
                                    cursor: hasCharacters ? 'pointer' : 'not-allowed'
                                }}
                            >
                                {letter}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Character Count for Selected Letter */}
            <div className="text-center mb-4">
                <p className="text-muted">
                    <strong style={{ color: colors.accent }}>{filteredCharacters.length}</strong> character(s) starting with <strong style={{ color: colors.accent }}>{activeLetter}</strong>
                </p>
            </div>

            {/* Characters Grid */}
            {filteredCharacters.length === 0 ? (
                <div className="card bg-dark" style={{ borderColor: colors.accent }}>
                    <div className="card-body text-center p-5">
                        <p className="text-muted mb-0">No characters found starting with "{activeLetter}"</p>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {filteredCharacters.map(character => (
                        <div key={character._id} className="col-md-6 col-lg-4">
                            <div className="card h-100 bg-dark" style={{ borderColor: colors.accent }}>
                                <div className="card-body">
                                    <h5 className="card-title mb-3" style={{ color: colors.accent }}>
                                        {character.name}
                                    </h5>

                                    {character.race && character.race !== 'NaN' && (
                                        <p className="text-muted mb-2">
                                            <small>
                                                <strong>Race:</strong> {character.race}
                                            </small>
                                        </p>
                                    )}

                                    {character.gender && character.gender !== 'NaN' && (
                                        <p className="text-muted mb-2">
                                            <small>
                                                <strong>Gender:</strong> {character.gender}
                                            </small>
                                        </p>
                                    )}

                                    {character.birth && character.birth !== 'NaN' && (
                                        <p className="text-muted mb-2">
                                            <small>
                                                <strong>Birth:</strong> {character.birth}
                                            </small>
                                        </p>
                                    )}

                                    {character.death && character.death !== 'NaN' && (
                                        <p className="text-muted mb-2">
                                            <small>
                                                <strong>Death:</strong> {character.death}
                                            </small>
                                        </p>
                                    )}

                                    {character.realm && character.realm !== 'NaN' && (
                                        <p className="text-muted mb-2">
                                            <small>
                                                <strong>Realm:</strong> {character.realm}
                                            </small>
                                        </p>
                                    )}

                                    {character.spouse && character.spouse !== 'NaN' && (
                                        <p className="text-muted mb-0">
                                            <small>
                                                <strong>Spouse:</strong> {character.spouse}
                                            </small>
                                        </p>
                                    )}

                                    {/* Show Wiki Link if available */}
                                    {character.wikiUrl && (
                                        <div className="mt-3">
                                            <a
                                                href={character.wikiUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-sm"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    color: colors.accent,
                                                    border: `1px solid ${colors.accent}`,
                                                    fontSize: '0.8rem'
                                                }}
                                            >
                                                View Wiki
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}