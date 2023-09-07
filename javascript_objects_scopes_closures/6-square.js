#!/usr/bin/node
const ParentSquare = require('./5-square');

class Square extends ParentSquare {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        let i = 0;
        while (i < this.size) {
            console.log(c.repeat(this.size));
            i++;
        }
    }
}

module.exports = Square;