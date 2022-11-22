const fs = require('fs');

fs.readFile('counter', { encoding: 'utf-8' }, (err, originalValue) => {
  if (err) { console.log('Uh oh...', err) }
  console.log('Current count:', originalValue);
  fs.writeFile('counter', String(Number(originalValue) + 1), (err) => {
    if (err) { console.log('The write failed :(', err) }
      fs.readFile('counter', { encoding: 'utf-8' }, (err, newValue) => {
        if (err) { console.log('Uh oh...', err) }
        console.log('New count:', newValue);
    });
  });
});
