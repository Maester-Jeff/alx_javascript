#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
    constructor(size) {
        this.size = size;
        super(size, size);
    }
}

module.exports = Square;