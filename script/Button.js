export class Button {
    constructor(text, width, height, onClick = false, gridArea = false) {
        this.node = document.createElement("button");
        if (gridArea) this.node.style.gridArea = gridArea;
        this.node.style.width = height;
        this.node.style.height = width;
        this.node.textContent = text;
        if (onClick == "cancel") {
            this.node.onclick = this.cancel;
        } else if (onClick == "save") this.node.onclick = this.save;
        else if (onClick) this.node.onclick = onClick;
        return this.node;
    }

    cancel = function () {
        const TL_BOX = this.parentElement.parentElement;
        const MAIN_BOX = TL_BOX.parentElement;
        MAIN_BOX.removeChild(TL_BOX);
    };

    save = function () {
        this.parentElement.childNodes[2].style.visibility = "hidden";
        this.parentElement.childNodes[1].style.visibility = "hidden";
    };
}
export function test() {
    console.log("TEST");
}
