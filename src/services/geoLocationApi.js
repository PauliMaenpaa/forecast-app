export async function getGeoLocation(searchQuery) {
  try {
    // 1. Haku 
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&language=en&format=json`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // 2. Järjestetään tulokset asukasluvun mukaan
    if (data.results && data.results.length > 0) {
      return data.results.sort((a, b) => {
        // Jos puuttuu, niin nolla
        const popA = a.population || 0;
        const popB = b.population || 0;
        return popB - popA; // Suurempi asukasluku ensin
      });
    }

    return [];
  } catch (e) {
    console.error("Error fetching geolocation data:", e);
    return [];
  }
}