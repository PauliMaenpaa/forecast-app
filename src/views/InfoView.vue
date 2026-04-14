<script setup>
</script>

<template>
    <v-container class="border fill-height">
        <v-row>
            <v-col cols="12" md="8" lg="6">
                <h2 class="text-title-large">Quick guide</h2>

                <div>
                    <ol class="ml-4">
                        <li class="mb-2">Navigate to the <strong>Forecast</strong> page.</li>
                        <li class="mb-2">Enter the name of the city you want to check in the search field.</li>
                        <li><strong>View the results:</strong> The app will instantly display the current weather
                            information and forecast for that city.</li>
                    </ol>
                </div>
            </v-col>
        </v-row>
        <v-spacer>

        </v-spacer>
        <v-row>
            <v-col cols="12" md="8" lg="6">
                <v-card variant="flat">
                    <v-card-title class="text-title-large">Creator</v-card-title>
                    <v-card-text>
                        <p class="text-body-medium">Pauli Mäenpää</p>
                        <p class="text-body-medium">© 2026</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn prepend-icon="mdi-github" href="https://github.com/PauliMaenpaa" target="_blank"
                            variant="elevated">
                            Github
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>