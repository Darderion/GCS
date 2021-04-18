
<template>
	<div class="waypoint">
		<input type="text" v-model="waypoint.position.latitude" placeholder="latitude"
			@keypress="checkCharacter($event)" @keyup="checkWaypoint()" :id="`Waypoint${waypoint.id}_latitude`">
		<input type="text" v-model="waypoint.position.longitude" placeholder="longitude"
			@keypress="checkCharacter($event)" @keyup="checkWaypoint()" :id="`Waypoint${waypoint.id}_longitude`">
		<input type="text" v-model="waypoint.position.altitude" placeholder="altitude"
			@keypress="checkCharacter($event)" @keyup="checkWaypoint()" :id="`Waypoint${waypoint.id}_altitude`">
		<input type="text" :value="waypoint">
		<div class="arrow up" @click="moveWaypointUp" v-if="hasUpperNeighbor()"></div>
		<div class="arrow down" @click="moveWaypointDown" v-if="hasLowerNeighbor()"></div>
		<button class="buttonRemoveWaypoint" @click="removeComponent">Remove</button>
	</div>
</template>

<script lang="ts">

import Waypoint from '../classes/Waypoint'
import { Component, Prop, Vue } from 'vue-property-decorator';
import MissionPlanner from './MissionPlanner.vue';

import L from 'leaflet';

@Component
export default class WaypointComponent extends Vue {
	@Prop() private waypoint!: Waypoint
	@Prop() private removeWaypoint!: () => void
	@Prop() private moveWaypointUp!: () => void
	@Prop() private moveWaypointDown!: () => void
	@Prop() private marker!: L.Marker
	@Prop() private removeMarker!: (marker: L.Marker) => void

	missionPlanner = this.$parent as MissionPlanner

	removeComponent() {
		this.removeWaypoint()
		this.removeMarker(this.marker)
	}

	hasUpperNeighbor() {
		return this.missionPlanner.getWaypointIndex(this.waypoint.id) != 0;
	}

	hasLowerNeighbor() {
		return this.missionPlanner.getWaypointIndex(this.waypoint.id) != this.missionPlanner.size - 1;
	}

	// This function highlights fields that have either type or constraint errors in them
	checkWaypoint() {
		this.updateMarker()

		const fields = this.waypoint.errorValues()
		const waypointLatitude = document.getElementById(`Waypoint${this.waypoint.id}_latitude`)
		const waypointLongitude = document.getElementById(`Waypoint${this.waypoint.id}_longitude`)
		const waypointAltitude = document.getElementById(`Waypoint${this.waypoint.id}_altitude`)

		if (!(waypointLatitude && waypointLongitude && waypointAltitude)) {
			throw Error("Waypoint not found")
		}

		if (!fields.includes(Waypoint.OPTIONS.latitude)) {
			waypointLatitude.classList.remove("inputTextNaN")
		} else {
			waypointLatitude.classList.add("inputTextNaN")
		}
	}

	// This function prevents any inputs other than [ '0', '1', ... , '9', '.' ]
    checkCharacter(event: Event | undefined) {
		// Modified code from:
		//	https://stackoverflow.com/questions/39782176/filter-input-text-only-accept-number-and-dot-vue-js

		event = (event) ? event : window.event;
		if (!event) return

		const evt = event as KeyboardEvent
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
			evt.preventDefault();
		}
    }

	updateMarker() {
		this.marker.setLatLng(
			new L.LatLng(this.waypoint.position.latitude, this.waypoint.position.longitude, this.waypoint.position.altitude)
		)
	}
}

</script>

<style scoped>

* {
	height: 50px;
}

.arrow.up {
	grid-column: 5;
}

.arrow.down {
	grid-column: 6;
}

.buttonRemoveWaypoint {
	grid-column: 7;
}

input {
	font-size: 18px;
	height: 70%;
	margin: 4px;
}

.buttonRemoveWaypoint {
	font-family: Hack, monospace;
	background: #a00;
	color: #ffffff;
	cursor: pointer;
	font-size: 2em;
	padding: 0.5rem;
	border: 0;
	transition: all 0.5s;
	border-radius: 10px;
	width: auto;
	position: relative;
}

.buttonRemoveWaypoint::after {
	content: "〉";
	font-family: "Font Awesome 5 Pro";
	font-weight: 400;
	position: absolute;
	left: 85%;
	top: 5%;
	right: 5%;
	bottom: 0;
	opacity: 0;
}

.buttonRemoveWaypoint:hover {
	background: red;
	transition: all 0.5s;
	border-radius: 10px;
	box-shadow: 0px 6px 15px #a00;
	padding: 0.5rem 3.5rem 0.5rem 0.5rem;
}

.buttonRemoveWaypoint:hover::after {
	opacity: 1;
	transition: all 0.5s;
}

div.arrow {
	/*
	width: 6vmin;
	height: 6vmin;
	*/
	width: 32px;
	height: 32px;

	box-sizing: border-box;
	left: 50%;
	top: 50%;
	transform: rotate(-45deg);
}
div.arrow::before {
	content: "";
	width: 100%;
	height: 100%;
	border-width: 0.8vmin 0.8vmin 0 0;
	border-style: solid;
	border-color: #fafafa;
	transition: 0.2s ease;
	display: block;
	transform-origin: 100% 0;
}
div.arrow:after {
	content: "";
	float: left;
	position: relative;
	top: -100%;
	width: 100%;
	height: 100%;
	border-width: 0 0.8vmin 0 0;
	border-style: solid;
	border-color: #fafafa;
	transform-origin: 100% 0;
	transition: 0.2s ease;
}
div.arrow:hover::after {
	transform: rotate(45deg);
	border-color: orange;
	height: 120%;
}
div.arrow:hover::before {
	border-color: orange;
	transform: scale(0.8);
}

div.up {
	margin-top: 18px;
	margin-left: 12px;
}

div.down {
	transform: rotate(135deg);
	-webkit-transform: rotate(135deg);
}

#wrap {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
}

.inputTextNaN {
	background-color: red;
}
</style>
