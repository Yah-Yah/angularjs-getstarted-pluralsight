// Basic javascript patterns: functions as modules = revealing module pattern


// NOTE_01 I need to create a worker object by invoking a function createWorker()
/*
const worker = createWorker();
// NOTE_02 once I have worker I need it to perform methods for example:
worker.job1(); // job1 might be calling a webserver
worker.job2(); // job2 might be message data back form the server etc
*/
// NOTE_03 How do I create worker object with two methods job1() and job2() on it.

// NOTE_04 this would be javascript approach to returning object with methods:
/*
return {
  // I could make we have pairs of keys 'job' and their functions inside this object
  job1: function() {console.log('do job 1')}
  // But instead we'll focus on declaring all functionality and variables first and then pointing to them on the run time
}
*/


// AngualrJS approach to creating such object with methods
// STEP_01 create a main function expression createWorker that returns an object
// with a variable and job1() and job2() functions as a private implementation
// details that can be invoked (revealed) later

const createWorker = function() {
  // STEP_02a create variable that stores number of times method has been called
  let workCounter = 0;

  // STEP_02b create function expressions for each of the methods you want to use in the object:
  const task1 = function() {
    workCounter += 1;
    console.log('this is task1 running for the ' + workCounter +' time');
  }
  const task2 = function() {
    workCounter += 1;
    console.log('this is task2 running for the ' + workCounter +' time');
  }

  // all variables and functions declared above are hidden outside of the returned object
  // STEP_03 return an object that exposes task1 and task2 as methods that can be invoked with worker.job1 etc
  return {
    // instead of declaring inline functions we can assign function expressions decalred above
    job1: task1, // job1 points to task1
    job2: task2 // task1 and task2 could have been named as job1 and job2 and then this would look job1: job1,
  }
}

const worker = createWorker();
worker.job1();
worker.job2();
worker.job2();
worker.job2();

// This approach is called REVEALING MODULE PATTERN
// The central principle of the Revealing Module Pattern is that
// all functionality and variables should be hidden unless deliberately exposed.

// It's module because we encapsulated some code inside the main function that we can then expose to the outside word by returning an object that points to them
// module = collection of components and features put together to do a whole piece of work
