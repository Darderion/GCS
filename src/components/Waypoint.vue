
<template>
	<div class="waypoint">
		<input type="number">
		<input type="number">
		<button class="buttonRemoveWaypoint">Remove</button>
	</div>
</template>

<script lang="ts">

import Waypoint from '../classes/Waypoint'
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class WaypointComponent extends Vue {
	@Prop() private waypoint!: Waypoint
}

</script>

<style scoped>
.waypoint {
	display: grid;
	grid-template-columns: 100px 100px auto 200px;
}

.buttonRemoveWaypoint {
	grid-column: 4;
}

.buttonRemoveWaypoint {
	font-family: Hack, monospace;
	background: #a00;
	color: #ffffff;
	cursor: pointer;
	font-size: 2em;
	padding: 1.5rem;
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
	top: 31%;
	right: 5%;
	bottom: 0;
	opacity: 0;
}
.buttonRemoveWaypoint:hover {
	background: red;
	transition: all 0.5s;
	border-radius: 10px;
	box-shadow: 0px 6px 15px #a00;
	padding: 1.5rem 3.5rem 1.5rem 1.5rem;
}
.buttonRemoveWaypoint:hover::after {
	opacity: 1;
	transition: all 0.5s;
}
</style>
