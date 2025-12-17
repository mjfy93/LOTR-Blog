// app/utils/imageHelpers.js
// Unified utility functions for handling images (books, movies, etc.)

/**
 * Convert a name to an image slug
 * Example: "The Fellowship of the Ring" → "the-fellowship-of-the-ring"
 * Example: "Beren and Lúthien" → "beren-and-luthien"
 * Example: "The Rings of Power - Season 1" → "the-rings-of-power-season-1"
 */
export function nameToSlug(name) {
    return name
        .toLowerCase()
        .normalize('NFD')                    // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '')     // Remove diacritics (accents)
        .replace(/[^a-z0-9]+/g, '-')         // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '');            // Remove leading/trailing hyphens
}

/**
 * Get image path for a given type (book, movie, etc.)
 * @param {string} name - The name to convert to a path
 * @param {string} type - The type of image ('books' or 'movies')
 * @param {string} customImage - Optional custom image path
 * @returns {string} - Path to the image
 */
export function getImagePath(name, type, customImage = null) {
    // If custom image provided, use it
    if (customImage) {
        return customImage;
    }

    // Generate slug from name
    const slug = nameToSlug(name);
    return `/images/${type}/${slug}.jpg`;
}

/**
 * Get the cover image path for a book
 * @param {string} bookName - The name of the book
 * @param {string} customImage - Optional custom image path
 * @returns {string} - Path to the image
 */
export function getBookCoverPath(bookName, customImage = null) {
    return getImagePath(bookName, 'books', customImage);
}

/**
 * Get the poster image path for a movie
 * @param {string} movieName - The name of the movie
 * @param {string} customImage - Optional custom image path
 * @returns {string} - Path to the image
 */
export function getMoviePosterPath(movieName, customImage = null) {
    return getImagePath(movieName, 'movies', customImage);
}

/**
 * Handle image load error - show placeholder
 * @param {Event} e - The error event
 * @param {string} type - The type of image ('books' or 'movies')
 */
export function handleImageError(e, type = 'books') {
    e.target.src = `/images/${type}/placeholder.jpg`;
    e.target.onerror = null; // Prevent infinite loop if placeholder also fails
}