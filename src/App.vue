<template>
	<div id="app">
		<div id="main">
			<Menu/>
			<Map v-bind:position="position" :addMap="addMap"/>
		</div>

		<MissionPlanner :startingWaypoints="waypoints" :position="position" :addMarker="addMarker" :removeMarker="removeMarker"/>
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

import L from 'leaflet';

@Component({
	components: {
		Map,
		WaypointComponent,
		Menu,
		MissionPlanner
	},
})
export default class App extends Vue {
	static position = new Position(59.87994329833602, 29.82886671034883, 100)

	get position() {
		return App.position
	}

	waypoints: Waypoint[] = [
	]

	maps: L.Map[] = [
	]

	addMap(map: L.Map) {
		this.maps.push(map)
	}

	addMarker(marker: L.Marker) {
		marker.addTo(this.maps[0])
	}

	removeMarker(marker: L.Marker) {
		marker.removeFrom(this.maps[0])
	}
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
