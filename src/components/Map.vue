
<template>
	<div class="map" id="map">

	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import Position from '../classes/Position';

@Component
export default class Map extends Vue {
	@Prop() private position!: Position;

	map: L.Map|undefined;

	mounted() {
		this.map = L.map('map').setView([59.87994329833602, 29.82886671034883], 18);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map)
	}
}
</script>

<style scoped>
#map {
	width: 90%;
	height: 400px;
}
</style>
