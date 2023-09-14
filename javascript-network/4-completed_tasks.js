#!/usr/bin/node
/*
const request = require('request')

const url = process.argv[2];

request(url, function (error, response, body) {
    if (error) {
        console.log(error)
    } else {
    const todos = JSON.parse(body);
    const completedTasks = {};
    for (const todo of todos) {
        if (todo.complete) {
            if (completedTasks[todo.userID]) {
              completedTasks[todo.userID] += 1;
            } else {
                completedTasks[todo.userId] = 1;
            }
        }
    }
    console.log(completedTasks);
    }
});
*/

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    const todosData = JSON.parse(body);

    // Initialize an object to store the count of completed tasks per user.
    const completedTasks = {};

    // Iterate through the todos and count completed tasks for each user.
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
