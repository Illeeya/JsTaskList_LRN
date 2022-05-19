import { test } from "./Button.js";
import { Button } from "./Button.js";

const BODY = document.body;
const ACCEPT_BTN = new Button("Accept", "2/1/2/2", accept);
const CANCEL_BTN = new Button("Cancel", "2/2/2/2", cancel);

function accept() {
	console.log("testAcceps");
}
function cancel() {
	console.log("testCansel");
}

// for (let i = 1; i <= 10; i++) {
// 	for (let j = 1; j <= 10; j++) {
// 		const DIV = document.createElement("div");
// 		DIV.style.minHeight = "100%";
// 		DIV.style.minWidth = "100%";

// 		if (((i + j) % 2) == 0) {
// 			DIV.style.background = "rgb(0,255,166)";
// 			DIV.style.background =
// 				"linear-gradient(45deg, rgba(0,255,166,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,255,166,1) 100%)";
// 		} else {
// 			DIV.style.background = "rgb(0,255,166)";
// 			DIV.style.background =
// 				"linear-gradient(135deg, rgba(0,255,166,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,255,166,1) 100%)";
// 		}
// 		DIV.style.gridArea = `${i}/${j}/${i + 1}/${j + 1}`;

// 		BODY.appendChild(DIV);
// 	}
// }

function addTask() {
	const TASK = document.createElement("div");
	const TA = document.createElement("textarea");
	TA.style.boxSizing = "border-box";
	TA.style.width = "100%";
	TA.style.border = "none";
	TA.style.outline = "none";
	TA.style.resize = "none";
	TA.style.margin = 0;
	TA.style.height = (TA.scrollHeight) + "px;overflow-y:hidden;";
	TA.style.gridArea = "1/1/2/3";
	TA.addEventListener("input", OnInput, false);
	TASK.style.display = "grid";
	TASK.style.gridTemplate = "2fr 1fr/1fr 1fr";
	TASK.style.alignItems = "center";
	TASK.style.justifyContent = "center";
	TASK.style.gridArea = "5/5/7/7";
	TASK.style.height = (TA.scrollHeight + 20) + "px";
	TASK.appendChild(TA);
	TASK.appendChild(ACCEPT_BTN);
	TASK.appendChild(CANCEL_BTN);
	BODY.appendChild(TASK);
}

function OnInput() {
	this.parentNode.style.height = (this.scrollHeight + 30) + "px";
	this.style.height = "auto";
	this.style.height = (this.scrollHeight) + "px";
}

addTask();
test();
