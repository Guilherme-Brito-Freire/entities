export class Vector2D {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y; 
    }

    getAxis() {
        return [this.x, this.y];
    }

    setAxis(axis) {
        if (Array.isArray(axis) && axis.length === 2) {
            this.x = axis[0];
            this.y = axis[1];
        } else {
            console.error("Invalid input: setAxis expects an array of two numbers.");
        }
    }
}
