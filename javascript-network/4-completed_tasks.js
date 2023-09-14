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
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const tasksCompleted = {};
    for (const todo of todos) {
      if (todo.completed) {
        if (tasksCompleted[todo.userId]) {
          tasksCompleted[todo.userId] += 1;
        } else {
          tasksCompleted[todo.userId] = 1;
        }
      }
    }
    console.log(tasksCompleted);
  }
});
