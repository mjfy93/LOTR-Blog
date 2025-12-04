

export async function loader({ request }) {
  const url = new URL(request.url);
  const endpoint = url.searchParams.get('endpoint');

  if (!endpoint) {
    return new Response(
      JSON.stringify({ error: 'Endpoint parameter is required' }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Get the bearer token from environment variable
    const bearerToken = process.env.LOTR_API_TOKEN;

    if (!bearerToken) {
      console.error('LOTR_API_TOKEN is not set');
      return new Response(
        JSON.stringify({ error: 'API token not configured' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Build the full URL
    const apiUrl = `https://the-one-api.dev/v2/${endpoint}`;

    // Make the request to The One API
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    return new Response(
      JSON.stringify(data),
      { 
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error proxying request:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch data',
        message: error.message 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}