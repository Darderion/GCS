
<template>
	<div id="waypoints">
		<button id="buttonAddWaypoint" @click="addWaypoint()">Add a waypoint</button>
		<WaypointComponent v-for="waypoint in waypoints" :key="`${waypoint.toString()}${waypoint.id}`" waypoint="waypoint"
			:removeWaypoint="_ => { removeWaypoint(waypoint.id) }"
			:moveWaypointUp="_ => { moveWaypointUp(waypoint.id) }"
			:moveWaypointDown="_ => { moveWaypointDown(waypoint.id) }"/>
	</div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from 'vue-property-decorator';

import Waypoint from '../classes/Waypoint'
import Position from '../classes/Position'

import WaypointComponent from './Waypoint.vue'

@Component({
	components: {
		WaypointComponent
	},
})

export default class MissionPlanner extends Vue {
	position = new Position(1, 2);

	@Prop() private waypoints!: Waypoint[]

	addWaypoint() {
		this.waypoints.push(new Waypoint(new Position(0, 0)))
	}

	removeWaypoint(id: number) {
		this.waypoints = this.waypoints.filter(waypoint => {
			return waypoint.id != id
		})
	}

	getWaypointIndex(id: number) {
		const waypoints = this.waypoints.map((waypoint, ind) => ({
			waypoint, ind
		})).filter(item => item.waypoint.id == id)

		if (waypoints.length == 0) return -1;

		return waypoints[0].ind
	}

	moveWaypointUp(id: number) {
		if (this.waypoints.length < 2) return;

		const ind = this.getWaypointIndex(id)

		if (ind < 1) return;

		// This is a solution introduced in ES6
		// It's both elegant and efficient in terms of the memory usage as well as in terms of CPU performance
		// It also doesn't work because JS doesn't allow Vue to observe changes related to the order of elements in the array
		/*
		[this.waypoints[ind - 1], this.waypoints[ind]] = [this.waypoints[ind], this.waypoints[ind - 1]]
		*/

		const waypoints = [ this.waypoints[ind], this.waypoints[ind - 1] ]
		this.waypoints.splice(ind - 1, 2, waypoints[0], waypoints[1])
	}

	moveWaypointDown(id: number) {
		if (this.waypoints.length < 2) return;

		const ind = this.getWaypointIndex(id)

		if (ind < 0) return;
		if (ind == this.waypoints.length - 1) return;

		const waypoints = [ this.waypoints[ind + 1], this.waypoints[ind] ]
		this.waypoints.splice(ind, 2, waypoints[0], waypoints[1])
	}
}
</script>

<style scoped>
#waypoints {
	display: grid;
	grid-template-rows: 70px;
	width: 80%;
	margin: 12px auto auto auto;
}

#buttonAddWaypoint {
	margin: 4px;
}
</style>
