<script setup>
import { ref } from "vue";
import { useGeoLocationStore } from "../stores/locationStore.js";
import { useForecastStore } from "../stores/forecastStore.js"

const locationStore = useGeoLocationStore();
const forecastStore = useForecastStore();

forecastStore.initDefaultLocationForecast();

const handleSearch = () => {
    locationStore.fetchLocations(locationStore.searchQuery);
};

</script>

<template>
    <v-container class="py-8">
        <v-row justify="center">
            <v-col cols="12"
                   md="8"
                   lg="6">
                <h1 class="text-h4 font-weight-bold mb-6">Weather Forecast</h1>

                <v-card elevation="2"
                        rounded="lg"
                        class="mb-4">
                    <v-card-text class="pa-4">
                        <v-text-field v-model="locationStore.searchQuery"
                                      :loading="locationStore.isLoading"
                                      color="primary"
                                      label="Search city..."
                                      variant="filled"
                                      prepend-inner-icon="mdi-city"
                                      append-inner-icon="mdi-magnify"
                                      hide-details
                                      clearable
                                      @click:append-inner="handleSearch"
                                      @keydown.enter="handleSearch"></v-text-field>
                    </v-card-text>

                    <v-expand-transition>
                        <v-list v-if="locationStore.searchResults?.length > 0"
                                border-t>
                            <v-list-item v-for="city in locationStore.searchResults"
                                         :key="city.id"
                                         @click="locationStore.selectLocation(city)"
                                         hover>
                                <template v-slot:prepend>
                                    <v-icon icon="mdi-map-marker-outline"
                                            color="secondary"></v-icon>
                                </template>
                                <v-list-item-title class="font-weight-medium">
                                    {{ city.name }}, {{ city.country }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    Lat: {{ city.latitude.toFixed(2) }}, Lon: {{ city.longitude.toFixed(2) }}
                                </v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12"
                   md="8"
                   lg="6">
                <div v-if="forecastStore.rawForecast?.daily">
                    <div class="d-flex align-center mb-4">
                        <v-icon icon="mdi-weather-rainy"
                                class="mr-2"
                                color="primary"></v-icon>
                        <h3 class="text-h5">7-Day Precipitation in <span class="text-primary">{{
                            locationStore.selectedLocation.name
                                }}</span></h3>
                    </div>

                    <v-card v-for="(amount, index) in forecastStore.rawForecast.daily.precipitation_sum"
                            :key="index"
                            class="mb-3 border-s-lg"
                            :style="{ borderLeftColor: amount > 0 ? '#1976D2 !important' : '#e0e0e0 !important' }"
                            elevation="1">
                        <v-card-text class="d-flex justify-space-between align-center py-3">
                            <div>
                                <div class="text-caption text-uppercase font-weight-bold text-grey">
                                    {{ new Date(forecastStore.rawForecast.daily.time[index]).toLocaleDateString('fi-FI',
                                        {
                                            weekday: 'long', day: 'numeric', month: 'numeric'
                                        }) }}
                                </div>
                            </div>

                            <v-divider vertical
                                       class="mx-4"></v-divider>

                            <div class="text-right">
                                <div class="text-h6 text-primary">{{ amount }} mm</div>
                                <div class="text-caption">
                                    Prob: {{ forecastStore.rawForecast.daily.precipitation_probability_max[index] }}%
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </div>

                <v-sheet v-else-if="!locationStore.isLoading"
                         color="transparent"
                         class="text-center pa-10 border-dashed rounded-lg"
                         border>
                    <v-icon icon="mdi-map-search-outline"
                            size="64"
                            color="grey-lighten-1"
                            class="mb-4"></v-icon>
                    <p class="text-grey-darken-1 text-body-1">
                        Enter a city name above to see the weather forecast.
                    </p>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>
