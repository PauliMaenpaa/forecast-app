import {defineStore} from "pinia";
import {getForecast} from "../services/forecastApi";
import {useGeoLocationStore} from "./locationStore";
import {mdiLongitude} from "@mdi/js";

export const useForecastStore = defineStore("Forecast", {
  state: () => ({
    rawForecast: null,
    isLoading: false,
    error: null,
  }),

getters: {
  formattedDailyDates: (state) => {
    if (!state.rawForecast?.daily?.time) return [];

    return state.rawForecast.daily.time.map((dateString) => {
      const date = new Date(dateString);
      
      // Pelkkä viikonpäivä
      const dayName = new Intl.DateTimeFormat('fi-FI', { weekday: 'long' }).format(date);
      
      // 2. Päivä ja kuukausi
      const dayAndMonth = new Intl.DateTimeFormat('fi-FI', { 
        day: 'numeric', 
        month: 'numeric' 
      }).format(date);

      // 3. Yhdistetään
      return `${dayName} ${dayAndMonth}`;
    });
  }
},

  actions: {
    async fetchForecast(lat, lon) {
      this.isLoading = true;
      this.error = null;

      try {
        const data = await getForecast(lat, lon);
        if (data) {
          this.rawForecast = data;
        }
      } catch (e) {
        this.error = "Could not fetch forecast data";
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },

    async initDefaultLocationForecast() {
      const locationStore = useGeoLocationStore();

      await this.fetchForecast(
        locationStore.selectedLocation.latitude,
        locationStore.selectLocation.longitude,
      );
    },
  },
});
