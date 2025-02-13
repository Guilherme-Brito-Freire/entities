let keysPressed = [null];


function searchKey(key) { //procura uma tecla na lista
    for (let i = 0; i < keysPressed.length; i++) {
        if (keysPressed[i] == key) {
            return i;
        }
    }
    return -1;
}

export function isPressed(key){
    if (searchKey(key)!=-1) {
        //console.log(key);
        return true;
    }
    return false;
}

document.addEventListener("keydown", (event)=>{
    const keyName = event.key;
    if (searchKey(keyName)==-1) {
        keysPressed.push(capitalLetterVerify(keyName));
    }
})
document.addEventListener("keyup", (event)=>{
    const keyName = event.key;
    const keyI = searchKey(capitalLetterVerify(keyName));
    if (keyI!=-1){
        keysPressed.splice(keyI,keyI);
    }
})

function capitalLetterVerify(key) {
    //verifica se o numero é maisculo pois só pode ter minusculo
        if (key.charCodeAt(0)>=65&&key.charCodeAt(0)<=90) {
            return String.fromCharCode(key.charCodeAt(0)+32);
        }
        return key;
}