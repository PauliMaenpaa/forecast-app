<script setup>
import NavigationComponent from "./components/NavigationComponent.vue";
</script>
<template>
	<v-app>
		<NavigationComponent />

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>
