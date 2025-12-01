

export const API_BASE_URL = "https://the-one-api.dev/v2";

// For development, you can temporarily use the token directly
// IMPORTANT: Remove this before deploying to production!
const DEV_MODE = import.meta.env.DEV;
const DEV_TOKEN = import.meta.env.VITE_LOTR_API_TOKEN; // Add to .env.local as VITE_LOTR_API_TOKEN

/**
 * Fetch data from The One API
 * In development: Can use direct API calls if VITE_LOTR_API_TOKEN is set
 * In production: Uses serverless function
 */
export async function fetchFromLOTRAPI(endpoint) {
    try {

        // In production or if dev token not set, use serverless function
        if (!DEV_MODE || !DEV_TOKEN) {
            console.log('Using serverless function for:', endpoint);
            const response = await fetch(`/api/lotr?endpoint=${endpoint}`);

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data;
        }

        // In development with token, call API directly
        console.log('DEV MODE: Calling API directly for:', endpoint);
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${DEV_TOKEN}`,
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching from LOTR API:', error);
        throw error;
    }
}