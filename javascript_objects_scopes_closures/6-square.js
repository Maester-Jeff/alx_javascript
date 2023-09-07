#!/usr/bin/node
const ParentSquare = require('./5-square');

class Square extends ParentSquare {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        let i = 0;
        while (i < this.width) {
            console.log(c.repeat(this.height));
            i++;
        }
    }
}

module.exports = Square;