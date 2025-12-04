
export function bookNameToSlug(bookName) {
    return bookName
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Get the cover image path for a book
 * @param {string} bookName - The name of the book
 * @param {string} customImage - Optional custom image path
 * @returns {string} - Path to the image
 */
export function getBookCoverPath(bookName, customImage = null) {

    if (customImage) {
        return customImage;
    }


    const slug = bookNameToSlug(bookName);
    return `/images/books/${slug}.jpg`;
}

/**
 * Handle image load error - show placeholder
 * @param {Event} e - The error event
 */
export function handleImageError(e) {
    e.target.src = 'https://placehold.co/600x900?text=Image+Coming+Soon&font=lora';
    e.target.onerror = null;
}