import {
    TextArea
} from "./TextArea.js";
import {
    Button
} from "./Button.js";

const MAIN_BOX = document.getElementById("mainBox");
const SAVE_BTN = new Button("Save", "30px", "100%", "save", "2/1/2/2");
const CANCEL_BTN = new Button("Cancel", "30px", "100%", "cancel", "2/2/2/2");
const ADD_BUTTON = new Button("+", "50px", "20%", addTask);
const TA = new TextArea();
TA.addEventListener("input", onInput, false);

function appendWithMinorBox(element) {
    const MINOR_BOX = document.createElement("div");
    MINOR_BOX.classList.add("minorBox");
    MINOR_BOX.appendChild(element);
    MAIN_BOX.insertBefore(
        MINOR_BOX
        , MAIN_BOX.childNodes[MAIN_BOX.childNodes.length - 1]
    );
}

function addTask() {
    const TASK = document.createElement("div");
    TASK.classList.add("tlDiv");
    //TASK.style.height = TA.scrollHeight + 50 + "px";
    const _TA = TA.cloneNode(true);
    _TA.addEventListener("input", onInput, false);
    TASK.appendChild(_TA);
    const _SAVE_BTN = SAVE_BTN.cloneNode(true);
    _SAVE_BTN.onclick = SAVE_BTN.onclick;
    TASK.appendChild(_SAVE_BTN);
    const _CANCEL_BTN = CANCEL_BTN.cloneNode(true);
    _CANCEL_BTN.onclick = CANCEL_BTN.onclick;
    TASK.appendChild(_CANCEL_BTN);
    console.log(CANCEL_BTN.onclick);
    appendWithMinorBox(TASK);
}

function onInput() {
    console.log(`He?`);
    this.parentNode.style.height = this.scrollHeight + 30 + "px";
    this.parentNode.style.width = this.scrollWidth + "px";
    this.style.height = "50";
    this.style.height = this.scrollHeight + "px";
    this.style.width = "50";
    this.style.width = this.scrollWidth + "px";
}

appendWithMinorBox(ADD_BUTTON);
