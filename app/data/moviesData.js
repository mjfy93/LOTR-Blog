// app/data/moviesData.js
// Centralized data for all LOTR movie and TV show collections

// Metadata to enrich API movies with additional information
export const movieMetadata = {
    'The Fellowship of the Ring': {
        releaseYear: 2001,
        director: 'Peter Jackson',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        rottenTomatoesScore: 91
    },
    'The Two Towers': {
        releaseYear: 2002,
        director: 'Peter Jackson',
        description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        rottenTomatoesScore: 95
    },
    'The Return of the King': {
        releaseYear: 2003,
        director: 'Peter Jackson',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        rottenTomatoesScore: 93
    },
    'The Unexpected Journey': {  // 👈 API returns this incorrect name
        name: 'An Unexpected Journey',  // 👈 We correct it here
        releaseYear: 2012,
        director: 'Peter Jackson',
        description: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug.',
        rottenTomatoesScore: 64
    },
    'The Desolation of Smaug': {
        releaseYear: 2013,
        director: 'Peter Jackson',
        description: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.',
        rottenTomatoesScore: 75
    },
    'The Battle of the Five Armies': {
        releaseYear: 2014,
        director: 'Peter Jackson',
        description: 'Bilbo and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.',
        rottenTomatoesScore: 59
    }
};

export const collections = [
    {
        id: 'lotr-trilogy',
        name: 'The Lord of the Rings Trilogy',
        slug: 'lotr-trilogy',
        description: 'Peter Jackson\'s epic film trilogy adaptation',
        image: '/images/movies/lotr-trilogy.jpg',
        type: 'film-series',
        movies: [] // Will be populated from API + enriched with metadata
    },
    {
        id: 'hobbit-trilogy',
        name: 'The Hobbit Trilogy',
        slug: 'hobbit-trilogy',
        description: 'Peter Jackson\'s three-part prequel trilogy',
        image: '/images/movies/hobbit-trilogy.jpg',
        type: 'film-series',
        movies: [] // Will be populated from API + enriched with metadata
    },
    {
        id: 'rings-of-power',
        name: 'The Rings of Power',
        slug: 'rings-of-power',
        description: 'Amazon\'s epic television series set in the Second Age',
        image: '/images/movies/rings-of-power.jpg',
        type: 'tv-series',
        movies: [
            {
                _id: 'rop-s1',
                name: 'The Rings of Power - Season 1',
                releaseYear: 2022,
                director: 'J.A. Bayona (Episodes 1-2)',
                runtimeInMinutes: 465, // Total runtime of all episodes
                budgetInMillions: 465, // $465 million for season 1
                boxOfficeRevenueInMillions: null, // N/A for TV series
                academyAwardNominations: 0,
                academyAwardWins: 0,
                rottenTomatoesScore: 84,
                description: 'Beginning in a time of relative peace, the series follows an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth.',
                episodes: 8,
                network: 'Amazon Prime Video'
            },
            {
                _id: 'rop-s2',
                name: 'The Rings of Power - Season 2',
                releaseYear: 2024,
                director: 'Charlotte Brändström',
                runtimeInMinutes: 480, // Estimated total runtime
                budgetInMillions: 450, // Estimated
                boxOfficeRevenueInMillions: null,
                academyAwardNominations: 0,
                academyAwardWins: 0,
                rottenTomatoesScore: 83,
                description: 'Sauron has returned. Cast out by Galadriel, the Dark Lord must now rely on his own cunning to rebuild his strength and forge the legendary Rings of Power.',
                episodes: 8,
                network: 'Amazon Prime Video'
            }
        ]
    },
    {
        id: 'international-adaptations',
        name: 'International Adaptations',
        slug: 'international-adaptations',
        description: 'Unique adaptations from around the world',
        image: '/images/movies/international.jpg',
        type: 'mixed',
        movies: [
            {
                _id: 'khraniteli',
                name: 'Khraniteli (The Keepers)',
                releaseYear: 1991,
                director: 'Natalya Serebryakova',
                runtimeInMinutes: 330, // 5 hours 30 minutes (TV movie)
                budgetInMillions: null, // Unknown
                boxOfficeRevenueInMillions: null,
                academyAwardNominations: 0,
                academyAwardWins: 0,
                rottenTomatoesScore: null,
                description: 'A Soviet television adaptation of The Fellowship of the Ring, known for its unique interpretation and theatrical staging. This rare adaptation was produced by Leningrad Television.',
                country: 'Soviet Union',
                language: 'Russian',
                network: 'Leningrad Television'
            },
            {
                _id: 'hobitit',
                name: 'Hobitit',
                releaseYear: 1993,
                director: 'Timo Torikka',
                runtimeInMinutes: 540, // 9 hours total (miniseries)
                budgetInMillions: null, // Unknown
                boxOfficeRevenueInMillions: null,
                academyAwardNominations: 0,
                academyAwardWins: 0,
                rottenTomatoesScore: null,
                description: 'A Finnish live-action television miniseries adaptation of The Hobbit, produced by Finnish broadcaster Yle. Notable for being one of the few non-English language adaptations of Tolkien\'s work.',
                country: 'Finland',
                language: 'Finnish',
                episodes: 9,
                network: 'Yle TV1'
            }
        ]
    }
];

/**
 * Get a collection by its slug
 * @param {string} slug - The URL slug (e.g., 'lotr-trilogy')
 * @returns {Object|null} - The collection object or null if not found
 */
export function getCollectionBySlug(slug) {
    return collections.find(c => c.slug === slug) || null;
}

/**
 * Get all collection summaries for the main movies page
 * @returns {Array} - Array of collection info for cards
 */
export function getAllCollections() {
    return collections.map(({ slug, name, image, description, type }) => ({
        slug,
        name,
        image,
        description,
        type
    }));
}

/**
 * Enrich a movie with additional metadata
 * Takes a movie from the API and adds our custom data
 * Can also override incorrect API data (like the wrong movie title)
 * @param {Object} movie - Movie object from API
 * @returns {Object} - Enriched movie object
 */
export function enrichMovie(movie) {
    const metadata = movieMetadata[movie.name];

    if (metadata) {
        return {
            ...movie,       // Start with API data
            ...metadata     // Override/add with our metadata (name can be corrected here)
        };
    }

    return movie;
}

/**
 * Filter API movies by collection
 * @param {Array} movies - All movies from API
 * @param {string} collectionSlug - Collection to filter for
 * @returns {Array} - Filtered movies
 */
export function filterMoviesByCollection(movies, collectionSlug) {
    if (collectionSlug === 'lotr-trilogy') {
        // Return LOTR trilogy movies (Fellowship, Two Towers, Return of the King)
        return movies.filter(movie =>
            movie.name === 'The Fellowship of the Ring' ||
            movie.name === 'The Two Towers' ||
            movie.name === 'The Return of the King'
        );
    }

    if (collectionSlug === 'hobbit-trilogy') {
        // Return Hobbit trilogy movies
        return movies.filter(movie =>
            movie.name === 'The Unexpected Journey' ||  // API has wrong name
            movie.name === 'The Desolation of Smaug' ||
            movie.name === 'The Battle of the Five Armies'
        );
    }

    return [];
}