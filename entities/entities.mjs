//numbers
let elapsed=0;
let oldTimeStamp=0;
let deltaT=0;

let renderFunc = null; //this is a function

let layers = [];

function gameloop(timeStamp){
    //elapsed time
    elapsed = timeStamp - oldTimeStamp;
    oldTimeStamp = timeStamp;

    //delta T
    deltaT = elapsed/1000;

    //render function callback
    if (renderFunc != null) 
        renderFunc(deltaT);
        //internalRender(deltaT);

    //repeat loop
    requestAnimationFrame(gameloop)
}

export function createLayer(layer) {
    layers.push(layer);
}

function posLoader(idForDisplay) {
    for (let i = 0; i < layers.length; i++) {
        document.body.appendChild(layers[i].HTMLelement)
        layers[i].reload();
    }
}

export function setRenderFunc(renderCallback) {
    renderFunc = renderCallback;
    //render all elements
}

export function start(renderCallback, onLoadCallback){

    //set the renderFunc
    renderFunc = renderCallback;

    //on load callback
    onLoadCallback();
    
    //loader
    posLoader();

    //start render
    requestAnimationFrame(gameloop);
}