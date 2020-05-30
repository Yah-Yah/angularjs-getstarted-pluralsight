// Some basic javascript patterns

// STEP_01 declare simple function expression
const work = function() {
  console.log('I\'m working hard!')
}

// STEP_02 instead of calling it in here declare a higher-order function that
// takes our simple function as an argument making it a callback function

const doWork = function(callbackFunction) {
  console.log('Let\'s start working.');

  // STEP_03 try/catch error handling
  try {
    callbackFunction();
  }
  catch(error) {
    console.log(error);
  }
  console.log('That\'s it for now.');
}

// STEP_04 call higher-order function
doWork(work);
