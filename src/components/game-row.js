import {ListComponent} from "../libs/list-component";
import {GameSlot} from "./game-slot";

export class GameRow extends ListComponent {
	constructor(row) {
		super('game-row');
		this.items = [];
		this.element.setAttribute('style', "dislay: block;");

		row.forEach(slot => {
			gameSlot = new GameSlot(slot);
			this.element.appendChild(gameSlot.element);
			this.items.push(gameSlot);
		});
	}
}