
<template>
	<div class="waypoint">
		<input type="text" v-model="waypoint.position.latitude" placeholder="latitude">
		<input type="text" v-model="waypoint.position.longitude" placeholder="longitude">
		<input type="text" v-model="waypoint.position.altitude" placeholder="altitude">
		<input type="text" :value="waypoint">
		<div class="arrow up" @click="moveWaypointUp" v-if="hasUpperNeighbor()"></div>
		<div class="arrow down" @click="moveWaypointDown" v-if="hasLowerNeighbor()"></div>
		<button class="buttonRemoveWaypoint" @click="removeWaypoint">Remove</button>
	</div>
</template>

<script lang="ts">

import Waypoint from '../classes/Waypoint'
import { Component, Prop, Vue } from 'vue-property-decorator';
import MissionPlanner from './MissionPlanner.vue';

@Component
export default class WaypointComponent extends Vue {
	@Prop() private waypoint!: Waypoint
	@Prop() private removeWaypoint!: () => void
	@Prop() private moveWaypointUp!: () => void
	@Prop() private moveWaypointDown!: () => void

	missionPlanner = this.$parent as MissionPlanner

	hasUpperNeighbor() {
		return this.missionPlanner.getWaypointIndex(this.waypoint.id) != 0;
	}

	hasLowerNeighbor() {
		return this.missionPlanner.getWaypointIndex(this.waypoint.id) != this.missionPlanner.size - 1;
	}
}

</script>

<style scoped>

* {
	height: 50px;
}

.waypoint {
	display: grid;
	grid-template-columns: 10% 10% 10% auto 5.5% 5.5% 15%;
	padding: 2px;
	background-color: #abc;
	border: solid 2px black;
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
</style>
