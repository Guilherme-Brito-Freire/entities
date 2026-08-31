import * as entities from "./entities/entities.mjs"
import {Sprite} from "./entities/sprite.mjs";
import {Layer} from "./entities/layer.mjs";
import { isPressed } from "./entities/keyboard.mjs";

let player = new Sprite();
let fundoImg = new Sprite();

let fundo = new Layer()
let layer = new Layer();

function onLoad() {

    player.setImage("teste.png");
    fundoImg.setImage("background.jpg");

    fundo.addClassToLayer("fundo");

    entities.createLayer(fundo);
    entities.createLayer(layer);
    layer.addElement(player);
    fundo.addElement(fundoImg);
}

const velocidade = 400;

function everyFrame(delta) {

    if (isPressed("a")) {
        player.vector2d.setAxis([player.vector2d.getAxis()[0]-velocidade*delta,player.vector2d.getAxis()[1]]);
        player.updateState();
        if (!player.mirrored) {
            player.mirrorIMG();
        }
    }
    if (isPressed("d")) {
        player.vector2d.setAxis([player.vector2d.getAxis()[0]+velocidade*delta,player.vector2d.getAxis()[1]]);
        player.updateState();
        
        if (player.mirrored) {
            player.mirrorIMG();
        }
    }
    if (isPressed("w")) {
        player.vector2d.setAxis([player.vector2d.getAxis()[0],player.vector2d.getAxis()[1]-velocidade*delta]);
        player.updateState();
    }
    if (isPressed("s")) {
        player.vector2d.setAxis([player.vector2d.getAxis()[0],player.vector2d.getAxis()[1]+velocidade*delta]);
        player.updateState();
    }
    console.log(delta);

}

entities.start(everyFrame,onLoad);