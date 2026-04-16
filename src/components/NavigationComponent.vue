<template>
	<v-app-bar class="p-0">
		<v-container class="d-flex">
			<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
			<!-- <v-list-item title="Daily forecast" subtitle="Real time weather insights"></v-list-item> -->
			<v-list-item to="/"
						 link
						 title="Home"></v-list-item>
			<v-list-item to="/forecast"
						 link
						 title="Forecast"></v-list-item>
			<v-list-item to="/info"
						 link
						 title="Info"></v-list-item>
			<v-app-bar-title></v-app-bar-title>
		</v-container>
	</v-app-bar>
</template>