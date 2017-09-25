import {SimpleComponent} from "./simple-component";

export class WriteableComponent extends SimpleComponent {
	constructor(selector) {
		super(selector);
	}
	get textContext() { return this.element.textContext; }
	set textContext(v) {
		return this.element.textContext = v;
	}
}