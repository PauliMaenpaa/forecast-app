<script setup>
</script>
<template>
    <v-container class="py-12">
        <v-row justify="center"
               class="mb-12">
            <v-col cols="12"
                   md="8"
                   lg="6"
                   class="text-center">
                <v-icon icon="mdi-weather-partly-cloudy"
                        size="64"
                        color="primary"
                        class="mb-4"></v-icon>
                <h1 class="text-h3 font-weight-bold mb-4">Weather Forecast</h1>
                <p class="text-body-1 text-medium-emphasis">
                    Simple precipitation tracking for cities worldwide.
                </p>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12"
                   md="6"
                   lg="4">
                <v-card to="/forecast"
                        variant="outlined"
                        class="pa-6 rounded-lg border-opacity-25"
                        hover>
                    <div class="d-flex align-center">
                        <div>
                            <h2 class="text-h6 mb-1">Open Forecast</h2>
                            <p class="text-body-2 text-medium-emphasis mb-0">
                                Search for a city and view 7-day data.
                            </p>
                        </div>
                        <v-spacer></v-spacer>
                        <v-icon icon="mdi-chevron-right"
                                color="primary"></v-icon>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center"
               class="mt-12">
            <v-col cols="12"
                   md="8"
                   lg="6"
                   class="text-center">
                <v-divider class="mb-6"></v-divider>
                <div class="text-caption text-disabled">
                    Data provided by Open-Meteo API • 2026
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>