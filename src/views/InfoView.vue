<script setup>
</script>

<template>
    <v-container class="py-8">
        <v-row justify="center">
            <v-col cols="12"
                   md="8"
                   lg="7">
                <div class="text-center mb-10">
                    <v-icon icon="mdi-weather-partly-cloudy"
                            size="64"
                            color="primary"
                            class="mb-4"></v-icon>
                    <h1 class="text-h3 font-weight-bold mb-4">Weather Forecast</h1>
                    <p class="text-body-1 text-medium-emphasis">
                        This application provides real-time weather information through a
                        user-friendly interface. By leveraging live data, it allows users to
                        search and track atmospheric conditions for cities across the globe instantly.
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row justify="center"
               class="mb-12">
            <v-col cols="12"
                   md="8"
                   lg="7">
                <v-card variant="outlined"
                        class="rounded-xl pa-6 border-opacity-50">
                    <h2 class="text-h5 font-weight-bold mb-6 d-flex align-center">
                        <v-icon icon="mdi-help-circle-outline"
                                class="mr-2"
                                color="secondary"></v-icon>
                        Quick Guide
                    </h2>

                    <v-timeline side="end"
                                density="compact">
                        <v-timeline-item dot-color="primary"
                                         size="small">
                            <div class="text-subtitle-1 font-weight-bold">Navigate</div>
                            <p class="text-body-2">Go to the <strong>Forecast</strong> page using the navigation bar.
                            </p>
                        </v-timeline-item>

                        <v-timeline-item dot-color="secondary"
                                         size="small">
                            <div class="text-subtitle-1 font-weight-bold">Search</div>
                            <p class="text-body-2">Enter the name of the city you want to check in the search field.</p>
                        </v-timeline-item>

                        <v-timeline-item dot-color="success"
                                         size="small">
                            <div class="text-subtitle-1 font-weight-bold">View Results</div>
                            <p class="text-body-2">The app will instantly display current conditions and a 7-day
                                precipitation forecast.</p>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12"
                   md="8"
                   lg="7">
                <v-card border
                        flat
                        class="rounded-lg bg-surface-light">
                    <v-card-text class="d-flex align-center justify-space-between flex-wrap">
                        <div>
                            <div class="text-overline">Developed by</div>
                            <div class="text-h6">Pauli Mäenpää</div>
                            <div class="text-caption">© 2026 • Seinäjoki, Finland</div>
                        </div>

                        <v-btn class="mt-4 mt-sm-0 text-none"
                               prepend-icon="mdi-github"
                               href="https://github.com/PauliMaenpaa"
                               target="_blank"
                               variant="flat"
                               color="grey-darken-3"
                               rounded="pill">
                            View GitHub Profile
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>