// Basic javascript patterns: IIFE (iffy) Immediately Invoked Function Expression
// Previous code is almost ok, it has one major problem: global variables (can be easily overwritten by someone else etc)
// We could wrap everything including createWorker decalration and calling worker.job1() methods
// in one main function for example:
// const workingProgram = function() {
//   const createWorker = function() { ... }
//   const worker = createWorker();
//   worker.job1();
//   ... }
// and then execute this one global function
// workingProgram()
// but we still would end up having 1 global variable
// Insteead we can make an IIFE Immediately Invoked Function Expression
// - a function that contains other functions and code and that immediately
// invokes itself like this:
/*
(function() {
  ...
}());
*/

(function() {
  const createWorker = function() {
    let workCounter = 0;
    const task1 = function() {
      workCounter += 1;
      console.log('this is task1 running for the ' + workCounter +' time');
    }
    const task2 = function() {
      workCounter += 1;
      console.log('this is task2 running for the ' + workCounter +' time');
    }
    return {
      job1: task1,
      job2: task2
    }
  }
  const worker = createWorker();
  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
  worker.job1();
}());
