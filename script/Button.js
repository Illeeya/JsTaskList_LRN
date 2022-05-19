export class Button {
	constructor(text, gridArea, onClick) {
		this.node = document.createElement("button");
		this.node.style.gridArea = gridArea;
		this.node.style.width = "100%";
		this.node.style.height = "30px";
		this.node.textContent = text;
		this.node.onclick = onClick;
		return this.node;
	}
}
export function test() {
	console.log("TEST");
}
