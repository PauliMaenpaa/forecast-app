<script setup>
import NavigationComponent from "./components/NavigationComponent.vue";
</script>
<template>
	<v-app>
		<v-main>
			<NavigationComponent />
			<router-view />
		</v-main>
	</v-app>
</template>
