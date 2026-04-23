<script setup>
import { ref } from "vue";
import { useGeoLocationStore } from "../stores/locationStore.js";
import { useForecastStore } from "../stores/forecastStore.js"

const locationStore = useGeoLocationStore();
const forecastStore = useForecastStore();

const handleSearch = () => {
    locationStore.fetchLocations(locationStore.searchQuery);
};

</script>

<template>
    <v-container>
        <v-row>
            <h2 class="text-headline-large">Search for daily forecast</h2>
        </v-row>

        <v-row>
            <v-text-field v-model="locationStore.searchQuery"
                          label="Search city..."
                          variant="outlined"
                          clearable></v-text-field>
            <v-btn @click="handleSearch"
                   color="primary"
                   class="ml-4 mb-5"
                   height="56"
                   text="search"></v-btn>
        </v-row>

        <v-row v-if="
            locationStore.searchResults && locationStore.searchResults.length > 0
        ">
            <v-col cols="12">
                <h3>Results:</h3>
                <v-list>
                    <v-list-item v-for="city in locationStore.searchResults"
                                 :key="city.id"
                                 @click="locationStore.selectLocation(city)"
                                 link>
                        <v-list-item-title>
                            {{ city.name }}, {{ city.country }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>

        <v-row v-if="locationStore.selectedLocation">
            <p class="text-body-large">
                Selected: {{ locationStore.selectedLocation.name }} <br>
                Latitude: {{ locationStore.selectedLocation.latitude }} <br>
                Longitude: {{ locationStore.selectedLocation.longitude }}
            </p>
        </v-row>

        <v-row v-if="forecastStore.rawForecast && forecastStore.rawForecast.daily">
            <v-col cols="12">
                <h3>7 Day Precipitation Forecast</h3>

                <v-card variant="outlined"
                        class="mb-2"
                        v-for="(amount, index) in forecastStore.rawForecast.daily.precipitation_sum"
                        :key="index">
                    <v-card-text class="d-flex justify-space-between">
                        <span><strong>{{ locationStore.selectedLocation.name }}</strong></span>
                        <span><strong>{{ forecastStore.rawForecast.daily.time[index] }}</strong></span>
                        <span>Sademäärä: <strong>{{ amount }} mm</strong></span>
                        <span>Todennäköisyys: {{ forecastStore.rawForecast.daily.precipitation_probability_max[index]
                        }}%</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row v-else>
            <v-col>
                <p class="text-grey">Select a city to see the precipitation forecast.</p>
            </v-col>
        </v-row>

    </v-container>
</template>
