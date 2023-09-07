#!/usr/bin/node
class Square extends Rectngle {
    constructor(size) {
        this.size = size;
        super(size, size);
    }
}

module.exports = Square;