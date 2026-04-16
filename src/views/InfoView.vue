<script setup>
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12"
                   md="8"
                   lg="6">
                <h2 class="text-headline-large">App description</h2>

                <div>
                    <p class="text-body-large">This application provides real-time weather information through a
                        user-friendly interface. By
                        leveraging live data, it allows users to search and track atmospheric conditions for cities
                        across the globe instantly.</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12"
                   md="8"
                   lg="6">
                <h2 class="text-headline-large">Quick guide</h2>

                <div>
                    <ol class="ml-4 text-body-large">
                        <li class="mb-2">Navigate to the <strong>Forecast</strong> page.</li>
                        <li class="mb-2">Enter the name of the city you want to check in the search field.</li>
                        <li><strong>View the results:</strong> The app will instantly display the current weather
                            information and forecast for that city.</li>
                    </ol>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12"
                   md="8"
                   lg="6">
                <v-card variant="flat">
                    <v-card-title class="pt-0 pb-0">
                        <h2 class="text-title-large">Creator</h2>
                    </v-card-title>
                    <v-card-text class="pt-0 pb-0">
                        <p class="text-body-large">Pauli Mäenpää © 2026</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="text-body-medium"
                               prepend-icon="mdi-github"
                               href="https://github.com/PauliMaenpaa"
                               target="_blank"
                               variant="elevated">
                            Github
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>