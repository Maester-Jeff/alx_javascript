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
    print () {
        let i = 0;
        while (i < this.width) {
            console.log('X'.repeat(this.height));
            i++;
        };
    }
}
module.exports = Rectangle;