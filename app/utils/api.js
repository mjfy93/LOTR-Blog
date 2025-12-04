

export const API_BASE_URL = "https://the-one-api.dev/v2";


const DEV_MODE = import.meta.env.DEV;
const DEV_TOKEN = import.meta.env.VITE_LOTR_API_TOKEN;

export async function fetchFromLOTRAPI(endpoint) {
    try {


        if (!DEV_MODE || !DEV_TOKEN) {
            console.log('Using serverless function for:', endpoint);
            const response = await fetch(`/api/lotr?endpoint=${endpoint}`);

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }

            const data = await response.json();
            return data;
        }


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