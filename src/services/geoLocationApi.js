export async function getGeoLocation(searchQuery) {
  try {

    // 1. Tehdään haku
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&language=en&format=json`
    );

    // 2. Tarkistetaan, onko vastaus OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 3. Muutetaan vastaus JSON-muotoon
    const data = await response.json();

    // 4. Palautetaan tulokset (Open-Meteo palauttaa ne yleensä 'results'-taulukossa)
    return data.results || []; 
    
  } catch (e) {
    console.error("Error fetching geolocation data:", e);
    // Palautetaan tyhjä taulukko tai heitetään virhe eteenpäin storelle
    return [];
  }
}