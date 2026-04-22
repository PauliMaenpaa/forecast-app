<script setup>
import { ref } from "vue";
import { useGeoLocationStore } from "../stores/locationStore.js";

const locationStore = useGeoLocationStore();

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
                Latitude: {{ locationStore.selectedLocation.longitude }}
            </p>
        </v-row>
    </v-container>
</template>
