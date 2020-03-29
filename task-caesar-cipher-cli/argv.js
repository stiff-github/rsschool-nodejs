const { program } = require('commander');

program
  .storeOptionsAsProperties(true)
  .requiredOption('-a, --action <type>', 'an action encode/decode')
  .requiredOption('-s, --shift <number>', 'a shift')
  .option('-i, --input <input>', 'an input file')
  .option('-o, --output <output>', 'an output file');

program.parse(process.argv);

if (isNaN(`${program.shift}`)) {
  process.stderr.write('error: shift not entered\n');
  process.exit(777);
}
if (`${program.action}` != 'encode' && `${program.action}` != 'decode') {
  process.stderr.write('error: action not entered\n');
  process.exit(777);
}
const fs = require('fs');
let path;

if (program.input != undefined) {
  path = `${program.input}`;
  fs.access(path, fs.F_OK, err => {
    if (err) {
      process.stderr.write('error: input file not found\n');
      process.exit(777);
    }
  });
}

if (program.output != undefined) {
  path = `${program.output}`;
  fs.access(path, fs.F_OK, err => {
    if (err) {
      process.stderr.write('error: output file not found\n');
      process.exit(777);
    }
  });
}

const shiftVal = `${program.shift}`;
const action = `${program.action}`;
const inputPath = program.input === undefined ? 'console' : `${program.input}`;
const outputPath =
  program.output === undefined ? 'console' : `${program.output}`;

module.exports = {
  shiftVal,
  inputPath,
  outputPath,
  action
};
