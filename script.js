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
