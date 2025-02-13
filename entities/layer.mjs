export class Layer{
    HTMLelement
    elements = [];
    constructor(){
        this.HTMLelement = document.createElement("div");
        this.HTMLelement.classList.add("layer");
    }
    addElement(element){
        this.elements.push(element);
    }
    reload(){
        for (let i = 0; i < this.elements.length; i++) {
            this.HTMLelement.appendChild(this.elements[i].HTMLelement)
            
        }
    }
    addClassToLayer(cssClass){
        this.HTMLelement.classList.add(cssClass);
    }
}