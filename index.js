// Arrays to keep track of each task's state
const taskTitles = [];
const taskDescription = [];
const taskComplete = [];


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskDescription.push(description);
  taskComplete.push(false);
}


// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : "not "}been completed`);
}
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.Complete = true;
  //[taskIndex] = true;
}

function newTask(title, description){
    //Use object to keep track of tasks state
    const task = {
      title: title,
      description: description,
      complete: false,
  
      logState: function() {
        console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
      },
  
      markCompleted: function() {
        this.complete = true;
      }
    };
    return task;
  }
// }
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);
//for now, lets just make sure we see our tasks
console.log(tasks);



// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
// newTask("Schedule Dentist Appointment"); //task 2

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
// logTaskState(1);
// logTaskState(2);
