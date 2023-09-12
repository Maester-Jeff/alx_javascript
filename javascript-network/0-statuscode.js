#!/usr/bin/node

const req = require('request');

req.get(url, {encoding: 'utf-8'})
    .on('response', response => {
        console.log('Code:', statusCode);
    })
