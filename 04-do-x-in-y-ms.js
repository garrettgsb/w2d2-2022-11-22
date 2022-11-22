// We want to say "do X in Y milliseconds."
// So it's not like the whole program has to wait for 2 seconds, then do a thing, then wait, then do a thing...
// It's like you say "Hey, do your thing, but when 2 seconds have passed, run this, k?"

const reportThatTwoSecondsHavePassed = () => console.log('2 seconds have passed...');

console.log('Start');
setTimeout(() => console.log('5.5 seconds have passed...'), 5500);
setTimeout(() => console.log('5 seconds have passed...'), 5000);
setTimeout(reportThatTwoSecondsHavePassed, 2000);
setTimeout(() => console.log('4 seconds have passed...'), 4000);
console.log('End');

// const times = [
//   2000,
//   4000,
//   5000,
//   5500,
// ];

// times.forEach(time => {
//   setTimeout(() => console.log(`${time} milliseconds have passed`), time);
// });

// Here's a weird gotcha: `console.log` before and after... Why?
