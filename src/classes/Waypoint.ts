
import Position from './Position'

export default class Waypoint {
	position: Position;
	id: number;

	static curId = 0;

	constructor(position: Position) {
		this.position = position
		this.id = Waypoint.getId();
	}

	static fromPosition(x: number, y: number) {
		return new Waypoint(new Position(x, y))
	}

	toString() {
		return `Waypoint: ${this.position}`
	}

	static getId() {
		return Waypoint.curId++;
	}
}
