export const bookMetadata = {
    'The Fellowship Of The Ring': {
        author: 'J.R.R. Tolkien',
        publishedYear: 1954,
        description: 'The first volume of The Lord of the Rings, following Frodo Baggins as he begins his quest to destroy the One Ring.'
    },
    'The Two Towers': {
        author: 'J.R.R. Tolkien',
        publishedYear: 1954,
        description: 'The second volume chronicles the separate journeys of the Fellowship members, following Frodo and Sam toward Mordor while the others pursue the captured hobbits.'
    },
    'The Return Of The King': {
        author: 'J.R.R. Tolkien',
        publishedYear: 1955,
        description: 'The final volume depicts the War of the Ring, the destruction of the One Ring, and the crowning of Aragorn as King of Gondor, bringing the quest to its epic conclusion.'
    }
};
export const collections = [
    {
        id: 'original-trilogy',
        name: 'Original Trilogy',
        slug: 'original-trilogy',
        description: 'The foundational works of Middle-earth',
        image: '/images/books/trilogy.jpg',
        books: [] // from API
    },
    {
        id: 'prequels',
        name: 'Prequels',
        slug: 'prequels',
        description: 'The stories that came before',
        image: '/images/books/prequels.jpg',
        books: [
            {
                _id: 'hobbit',
                name: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                publishedYear: 1937,
                description: 'Bilbo Baggins\' unexpected journey to the Lonely Mountain.',
                // Optional: Specify custom image path if it doesn't match the name slug

            },
            {
                _id: 'silmarillion',
                name: 'The Silmarillion',
                author: 'J.R.R. Tolkien',
                publishedYear: 1977,
                description: 'The history of the Elder Days and the First Age of Middle-earth.'
            },
            {
                _id: 'beren-luthien',
                name: 'Beren and Lúthien',
                author: 'J.R.R. Tolkien',
                publishedYear: 2017,
                description: 'The epic love story of a mortal man and an immortal elf.'
            },
            {
                _id: 'children-hurin',
                name: 'The Children of Húrin',
                author: 'J.R.R. Tolkien',
                publishedYear: 2007,
                description: 'The tale of Túrin Turambar and his sister Nienor.'
            },
            {
                _id: 'fall-gondolin',
                name: 'The Fall of Gondolin',
                author: 'J.R.R. Tolkien',
                publishedYear: 2018,
                description: 'The dramatic story of the fall of the great Elven city.'
            },
            {
                _id: 'unfinished-tales',
                name: 'Unfinished Tales',
                author: 'J.R.R. Tolkien',
                publishedYear: 1980,
                description: 'A collection of stories and essays by Tolkien.'
            }

        ]
    },
    {
        id: 'history-of-middle-earth',
        name: 'The History of Middle-earth',
        slug: 'history-of-middle-earth',
        description: 'The complete 12-volume series edited by Christopher Tolkien',
        image: '/images/books/historyofME.jpg',
        books: [
            {
                _id: 'book-of-lost-tales-1',
                name: 'The Book of Lost Tales, Part One',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1983,
                volume: 1,
                description: 'The first of two volumes containing the earliest tales of the First Age.'
            },
            {
                _id: 'book-of-lost-tales-2',
                name: 'The Book of Lost Tales, Part Two',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1984,
                volume: 2,
                description: 'The second volume of the earliest narratives of Middle-earth.'
            },
            {
                _id: 'lays-of-beleriand',
                name: 'The Lays of Beleriand',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1985,
                volume: 3,
                description: 'Two long narrative poems: The Lay of the Children of Húrin and The Lay of Leithian.'
            },
            {
                _id: 'shaping-of-middle-earth',
                name: 'The Shaping of Middle-earth',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1986,
                volume: 4,
                description: 'The Quenta, the Ambarkanta, and the Annals documenting the evolution of Middle-earth.'
            },
            {
                _id: 'lost-road',
                name: 'The Lost Road and Other Writings',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1987,
                volume: 5,
                description: 'Language and legend before The Lord of the Rings, including The Fall of Númenor.'
            },
            {
                _id: 'return-of-shadow',
                name: 'The Return of the Shadow',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1988,
                volume: 6,
                description: 'The first part of the history of The Lord of the Rings, covering the early drafts.'
            },
            {
                _id: 'treason-of-isengard',
                name: 'The Treason of Isengard',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1989,
                volume: 7,
                description: 'The second part of the history of The Lord of the Rings, from Rivendell to Helm\'s Deep.'
            },
            {
                _id: 'war-of-the-ring',
                name: 'The War of the Ring',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1990,
                volume: 8,
                description: 'The third part of the history of The Lord of the Rings, covering the war itself.'
            },
            {
                _id: 'sauron-defeated',
                name: 'Sauron Defeated',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1992,
                volume: 9,
                description: 'The final part of the history of The Lord of the Rings, including The Notion Club Papers.'
            },
            {
                _id: 'morgoth-ring',
                name: 'Morgoth\'s Ring',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1993,
                volume: 10,
                description: 'The later Silmarillion, Part One: myths transformed and the tale of the Rings of Power.'
            },
            {
                _id: 'war-of-jewels',
                name: 'The War of the Jewels',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1994,
                volume: 11,
                description: 'The later Silmarillion, Part Two: the legends of Beleriand.'
            },
            {
                _id: 'peoples-of-middle-earth',
                name: 'The Peoples of Middle-earth',
                author: 'J.R.R. Tolkien',
                editor: 'Christopher Tolkien',
                publishedYear: 1996,
                volume: 12,
                description: 'The final volume: essays on languages, peoples, and customs of Middle-earth.'
            }
        ]
    }
];

/**
 * Get a collection by its slug
 * @param {string} slug - The URL slug (e.g., 'original-trilogy')
 * @returns {Object|null} - The collection object or null if not found
 */
export function getCollectionBySlug(slug) {
    return collections.find(c => c.slug === slug) || null;
}

/**
 * Get all collection summaries for the main books page
 * @returns {Array} - Array of collection info for cards
 */
export function getAllCollections() {
    return collections.map(({ slug, name, image, description }) => ({
        slug,
        name,
        image,
        description
    }));
}
export function enrichBook(book) {
    const metadata = bookMetadata[book.name];

    if (metadata) {
        return { ...book, ...metadata };  // Merge API data + our data
    }

    return book;
}