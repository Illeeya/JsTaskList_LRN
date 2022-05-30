export class TextArea {
	constructor() {
		this.node = document.createElement("textarea");
		this.node.wrap = "off";
		this.node.style.boxSizing = "border-box";
		this.node.style.width = "100%";
		this.node.style.border = "none";
		this.node.style.outline = "none";
		this.node.style.resize = "none";
		this.node.style.margin = 0;
		this.node.style.minHeight = "5vh";
		this.node.style.height = this.node.scrollHeight + "px;overflow-y:hidden;";
		this.node.style.gridArea = "1/1/2/3";
		//this.node.addEventListener("input", this.OnInput, false);
		return this.node;
	}
}
