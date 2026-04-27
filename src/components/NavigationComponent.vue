<template>
	<nav>
		<v-app-bar class="pr-6 text-body-1">
			<v-app-bar-nav-icon class="d-md-none"
								@click="drawer = !drawer"></v-app-bar-nav-icon>

			<div class="d-none d-md-flex ga-2 pa-4">
				<v-btn to="/"
					   variant="text">Home</v-btn>
				<v-btn to="/forecast"
					   variant="text">Forecast</v-btn>
				<v-btn to="/info"
					   variant="text">Info</v-btn>
			</div>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer"
							 location="top"
							 temporary
							 class="d-md-none">
			<v-list>
				<v-list-item to="/"
							 title="Home"
							 @click="drawer = false"></v-list-item>
				<v-list-item to="/forecast"
							 title="Forecast"
							 @click="drawer = false"></v-list-item>
				<v-list-item to="/info"
							 title="Info"
							 @click="drawer = false"></v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>