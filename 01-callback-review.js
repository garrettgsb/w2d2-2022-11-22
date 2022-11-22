// The Setup: countTimesRan * 100
// {
//   let count = 0;
//   function countTimesRan() {
//     console.log(`countTimesRan has run ${++count} times!`);
//   }

//   for (let i = 0; i < 100; i++) {
//     if (Math.random() < 0.5) {
//       countTimesRan();
//     }
//   }
// }


{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function shouldRun(probability, callback) {
    const _shouldRun = Math.random() < probability;
    if (_shouldRun) {
      return callback();
    }
  }

  for (let i = 0; i < 100; i++) {
    shouldRun(0.2, countTimesRan);
  }
}
