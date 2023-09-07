#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }   else {
            Object.assign (this, {});
        }
    }
    
    print() {
        let i = 0;
        while (i < this.height) {
            console.log('X'.repeat(this.width));
            i++;
        }
    }

    rotate() {
        const exchange = this.height;
        this.height = this.width;
        this.width = exchange;
    }

    double() {
        this.height *= 2;
        this.width *= 2;
    }
}
module.exports = Rectangle;
