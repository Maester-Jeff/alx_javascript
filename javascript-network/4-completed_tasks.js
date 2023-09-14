#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    const todosData = JSON.parse(body);

    // Initialize an object to store the count of completed tasks.
    const completedTasks = {};

    // Iterate through the todos and count completed tasks.
    todosData.forEach((todo) => {
      if (todo.completed) {
        if (completedTasks[todo.userId]) {
          completedTasks[todo.userId]++;
        } else {
          completedTasks[todo.userId] = 1;
        }
      }
    });
    console.log(completedTasks);
  }
);
