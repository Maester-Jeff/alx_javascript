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

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const todosData = JSON.parse(body);

    // Initialize an object to store the count of completed tasks per user.
    const completedTasksByUser = {};

    // Iterate through the todos and count completed tasks for each user.
    todosData.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  } catch (parseError) {
    console.error('Error parsing response:', parseError);
    process.exit(1);
  }
});
