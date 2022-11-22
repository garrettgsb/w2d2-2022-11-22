// Somebody asked about handling files with multiple values.
// No problem.
// The trick is: The entire file comes in as a plaintext string,
// so we need to do some processing before we can regard the "multiple" values
// as actual discrete values, instead of one big value: The file string.
// In this case, we use `split` on the ',' character to distinguish between
// our different values, creating an array.
// Then we can just do array stuff to it, like `map`.
// We just have to turn it back into a string before we write it.

const fs = require('fs');

fs.readFile('counter-with-multiple-numbers', { encoding: 'utf-8' }, (err, plaintextValues) => {
  const valuesAsArray = plaintextValues.split(',');
  console.log('Old values:', valuesAsArray);
  const incrementedValues = valuesAsArray.map(value => String(Number(value) + 1));
  fs.writeFile('counter-with-multiple-numbers', incrementedValues.join(','), (err) => {
    if (err) { console.log('The write failed :(', err) }
      fs.readFile('counter-with-multiple-numbers', { encoding: 'utf-8' }, (err, plaintextValues) => {
        const valuesAsArray = plaintextValues.split(',');
        console.log('New values:', valuesAsArray);
      });
  });
});
