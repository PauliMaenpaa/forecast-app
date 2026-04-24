import {defineStore} from "pinia";
import {getForecast} from "../services/forecastApi";

export const useForecastStore = defineStore("Forecast", {
  state: () => ({
    rawForecast: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchForecast(lat, lon) {
      this.isLoading = true;
      this.error = null;

      try {
        const data = await getForecast(lat, lon);
        if (data) {
          this.rawForecast = data;
          console.log("Forecast data stored");
        }
      } catch (e) {
        this.error = "Couldn fetch forecast data";
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
