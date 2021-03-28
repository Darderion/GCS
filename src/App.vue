<template>
	<div id="app">
		<div id="main">
			<Menu/>
			<Map v-bind:position="position" />
		</div>

		<MissionPlanner :waypoints="waypoints"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Map from './components/Map.vue';
import Position from './classes/Position';
import Waypoint from './classes/Waypoint';
import WaypointComponent from './components/Waypoint.vue';
import Menu from './components/Menu.vue';
import MissionPlanner from './components/MissionPlanner.vue';

@Component({
	components: {
		Map,
		WaypointComponent,
		Menu,
		MissionPlanner
	},
})
export default class App extends Vue {
	position = new Position(1, 2, 3);

	waypoints: Waypoint[] = [
		new Waypoint(new Position(1, 2, 3)),
		new Waypoint(new Position(4, 5, 6))
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
