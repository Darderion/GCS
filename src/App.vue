<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<div id="main">
			<Menu/>
			<Map v-bind:position="position" />
		</div>

		<div id="Waypoints">
			<WaypointComponent v-for="waypoint in waypoints" :key="waypoint.toString()" waypoint="waypoint"/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Map from './components/Map.vue';
import Position from './classes/Position';
import Waypoint from './classes/Waypoint';
import WaypointComponent from './components/Waypoint.vue';
import Menu from './components/Menu.vue';

@Component({
	components: {
		Map,
		WaypointComponent,
		Menu
	},
})
export default class App extends Vue {
	position = new Position(1, 2);

	waypoints: Waypoint[] = [
		Waypoint.fromPosition(1, 2),
		Waypoint.fromPosition(3, 4)
	]
}
</script>

<style>
body {
	background-color: #789;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

#main {
	display: grid;
	grid-template-columns: 250px auto;
}

Menu {
	grid-column: 1;
}

Map {
	grid-column: 2;
}
</style>
