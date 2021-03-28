
import Position from './Position'

export default class Waypoint {
	// MAV_CMD_NAV_WAYPOINT
	/*
	Param (:Label)			Values		Units
	1: Hold					min:0		s
	2: Accept Radius		min:0		m
	3: Pass Radius						m
	4: Yaw								deg
	5: Latitude
	6: Longitude
	7: Altitude	Altitude				m
	*/

	static defaultOptions = {
		hold: 0,
		yaw: 0,
		acceptRadius: 0,
		passRadius: 0
	}

	position: Position;
	id: number;

	hold: number;
	yaw: number;
	acceptRadius: number;
	passRadius: number;

	static curId = 0;

	constructor(position: Position) {
		this.position = position
		this.id = Waypoint.getId();

		this.hold =			Waypoint.defaultOptions.hold
		this.yaw =			Waypoint.defaultOptions.yaw
		this.acceptRadius =	Waypoint.defaultOptions.acceptRadius
		this.passRadius =	Waypoint.defaultOptions.passRadius
	}

	toString() {
		return `Waypoint: ${this.position}`
	}

	static getId() {
		return Waypoint.curId++;
	}
}
