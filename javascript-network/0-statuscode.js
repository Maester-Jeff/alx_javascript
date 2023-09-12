#!/usr/bin/node

const req = require('request');

const id = process.argv[3];
const url = '${process.argv[2]}${id}'

req.get(url, { encoding: 'utf-8' })
    .on('data', function (data) {
        const response = JSON.parse(data);
        console.log('Code:', response.statusCode);
    })

