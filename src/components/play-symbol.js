import {WriteableComponent} from "../libs/writeable-component";

export class PlaySymbol extends WriteableComponent {
	constructor() {
		super('symbol');
		this.element.setAttribute('style', 'float:right');
	}
	set textContent(v) {
		super.textContent = `playing: $(v)`
	}
}