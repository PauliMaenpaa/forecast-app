import {useGeoLocationStore} from "../stores/locationStore.js";

export async function getForecast() {
  try {
    const locationStore = useGeoLocationStore();
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${locationStore.selectedLocation.latitude}&longitude=${locationStore.selectedLocation.longitude}&daily=precipitation_sum,precipitation_probability_max&hourly=precipitation,precipitation_probability&current=precipitation&timezone=auto&past_days=0&forecast_days=7&wind_speed_unit=ms`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data || {};
  } catch (e) {
    console.log("Error fetching forecast data:", e);
  }
}
