import {WriteableComponent} from "../libs/writeable-component";

export class CurrentTurn extends WriteableComponent {
	constructor() {
		super('current-turn');
		this.element.setAttribute('style', "float: left");
	}

	set.textContent(v) {
		super.textContent = `turn No: $(v)`
	}
}