import { Vector2D } from "./vector.mjs";

export class Sprite {

    HTMLelement
    vector2d
    mirrored=false;

    constructor() {

        this.vector2d = new Vector2D();
        this.createElementHTML();
        //create the HTML ELEMENT
    }

    createElementHTML() {
        this.HTMLelement = document.createElement("img");
        this.HTMLelement.classList.add("sprite")
        //console.log(this.HTMLelement);
    }
    updateState() {
        this.HTMLelement.style.marginLeft = this.vector2d.x + "px";
        this.HTMLelement.style.marginTop = this.vector2d.y + "px";
    }
    setImage(FileIMG) {
        this.HTMLelement.src = "./../assets/sprites/"+FileIMG;
    }
    mirrorIMG() {
        if (!this.mirrored) {
            this.mirrored = true
            this.HTMLelement.style.transform = "scaleX(-1)";
            return null
        }
        this.mirrored = false;
        this.HTMLelement.style.transform = "scaleX(1)";
        return null
    }
}