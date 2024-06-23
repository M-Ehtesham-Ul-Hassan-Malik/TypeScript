#! /usr/bin/env node 

import inquirer from "inquirer";

let todo: string[] = [];
let condition = true;

interface TaskUpdate {
  idx: number;
  updatedTask: string;
}

let main = async () => {
  while (condition) {
    let options = await inquirer.prompt({
      name: "option",
      type: "list",
      message: "Please select the relevant option:",
      choices: ["Add Task", "Delete Task", "Update Task", "View Tasks", "Exit"],
    });

    if (options.option === "Add Task") {
      await addTask();
    } else if (options.option === "Delete Task") {
      await viewTask();
      let deleteOption = await inquirer.prompt({
        name: "opt",
        type: "number",
        message: "Enter index number of the task you want to delete:",
      });
      deleteTask(deleteOption.opt);
    } else if (options.option === "Update Task") {
      await updateTask();
    } else if (options.option === "View Tasks") {
      await viewTask();
    } else if (options.option === "Exit") {
      condition = false;
    }
  }
};

// Function to add a new task
let addTask = async () => {
  let newTask = await inquirer.prompt({
    name: "task",
    type: "input",
    message: "Enter your new task: ",
  });
  todo.push(newTask.task);
  console.log(`${newTask.task} added successfully into the list.`);
};

// Function to view the TODO list
let viewTask = async () => {
  console.log("Current Tasks:");
  todo.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
  console.log(""); // Add a blank line for separation
};

// Function to delete a task
let deleteTask = (index: number) => {
  if (index < 1 || index > todo.length) {
    console.log("Invalid index. Please enter a valid index.");
    return;
  }

  let deletedTask = todo.splice(index - 1, 1)[0]; // Remove task at specified index
  console.log(`${deletedTask} deleted successfully.`);
};

// Function to update a task
let updateTask = async () => {
  await viewTask();
  let updateTaskIndex = await inquirer.prompt<TaskUpdate>([
    {
      name: "idx",
      type: "number",
      message: "Please enter the index number (1-based) to update task: ",
    },
    {
      name: "updatedTask",
      type: "input",
      message: "Enter the new task name: ",
    },
  ]);

  let indexToUpdate = updateTaskIndex.idx - 1; // Convert 1-based index to zero-based index
  if (indexToUpdate < 0 || indexToUpdate >= todo.length) {
    console.log("Invalid index. Please enter a valid index.");
    return;
  }

  todo[indexToUpdate] = updateTaskIndex.updatedTask;
  console.log(`Task at index ${updateTaskIndex.idx} updated successfully.`);
};

main();
