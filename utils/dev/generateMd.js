const fs = require('fs');

fs.readFile('snippets/snippets.json', (err, data) => {
  if (err) throw err;
  const obj = JSON.parse(data.toString());
  const result = Object.keys(obj).map(
    (key) => `${obj[key]['prefix']} | ${key}`
  );

  fs.writeFile(
    'file.txt',
    result.join(`
  `),
    'utf8',
    (err) => {
      if (err) throw err;
    }
  );
});
