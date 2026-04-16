<script setup>

import { ref } from 'vue'

const searchQuery = ref('')
const city = ref('')

const handleSearch = () => {
    city.value = searchQuery.value
}

</script>

<template>
    <v-container>
        <v-row>
            <h2 class="text-headline-large">Search for daily forecast</h2>
        </v-row>
        <v-row>
            <v-text-field v-model="searchQuery"
                          label="Search city..."
                          variant="outlined"
                          clearable></v-text-field>
            <v-btn @click="handleSearch"
                   color="primary"
                   class="ml-4 mb-5"
                   height="56"
                   text="search"></v-btn>
        </v-row>
        <v-row v-if="searchQuery">
            <p class="text-body-large">
                {{ city }}
            </p>
        </v-row>
    </v-container>
</template>