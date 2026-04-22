import { defineStore } from 'pinia'
import { getGeoLocation } from '../services/geoLocationApi'

export const useGeoLocationStore = defineStore("Geolocation", {
    // Täällä pidetään kirjaa itse tilasta
    state: () => ({
        searchQuery: '',
        searchResults: [],
        selectedLocation: {
            name: 'London',
            latitude: 51.50853,
            longitude: -0.12574
        },
        isLoading: false
    }),

    // Nämä ovat tilanhallintaan liittyviä metodeja metodeja
    actions: {
        async fetchLocations(query) {

            this.isLoading = true;
            try {
                const result = await getGeoLocation(query);
                this.searchResults = result;
            } finally {
                this.isLoading = false;
            }
        },

        selectLocation(location) {
             this.selectedLocation = location;
             this.searchResults = [];
             this.searchQuery = location.name;
        }
    }
    // state ja actions lisäksi myös getters, jotka ovat computed properties:
    //
    //   getters: {
    //     doubleCount: (state) => state.count * 2,
    //   }
})  