import {WriteableComponent} from "../lib/writeable-component";

export class GameSlot extends WriteableComponent {
	constructor(slot) {
		super('game-slot');
		this.element.setAttribute('style', "height: 600px; background-color: grey; display: inline-block; " + "border-align: 1px solid black; margin: 5px; font-size: large; color: black; line-height: 60px;" + "text-align: center; cursor: pointer");
		this.element.setAttribute('slot-row',slot.row);
		this.element.setAttribute('slot-column',slot-column);
		this.element.textContent = "-";
	}

	set.textContent(slot) {
		super.textContent = slot.symbol;
		this.element.style.backgroundColor = 'white';
	}
}