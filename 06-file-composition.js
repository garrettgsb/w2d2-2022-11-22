const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('fNames', JSON.parse(data), generateNames));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => loadNames('mNames', JSON.parse(data), generateNames));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => loadNames('surnames', data.split(',\n'), generateNames));

const nameLibrary = {
  fNames: undefined,
  mNames: undefined,
  surnames: undefined,
};

function loadNames(libraryKey, names, afterLoaded) {
  nameLibrary[libraryKey] = names;
  const dataStillMissing = Object.values(nameLibrary).includes(undefined);
  if (dataStillMissing) return;
  afterLoaded();
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateNames() {
  const fIdx = getRandomIndex(nameLibrary.fNames);
  const mIdx = getRandomIndex(nameLibrary.mNames);
  const surnameIdx1 = getRandomIndex(nameLibrary.surnames);
  const surnameIdx2 = getRandomIndex(nameLibrary.surnames);

  const femaleName = nameLibrary.fNames[fIdx];
  const surname1 = nameLibrary.surnames[surnameIdx1];

  const maleName = nameLibrary.mNames[mIdx];
  const surname2 = nameLibrary.surnames[surnameIdx2];

  // glue em together
  console.log(`${femaleName} ${surname1}`);
  console.log(`${maleName} ${surname2}`);
}
