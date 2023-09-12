#!/usr/bin/node

const req = require('request');

const id = process.argv[3];

const url = '${https://swapi-api.alx-tools.com/api/films/}${id}'

req.get(url, { encoding: 'utf-8' })
    .on(data, data => {
        const object = JSON.parse(data);
        console.log(data.title)
    })

