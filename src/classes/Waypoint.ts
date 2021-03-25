
import Position from './Position'

export default class Waypoint {
	position: Position;

	constructor(position: Position) {
		this.position = position
	}

	static fromPosition(x: number, y: number) {
		return new Waypoint(new Position(x, y))
	}

	toString() {
		return `Waypoint: ${this.position}`
	}
}
