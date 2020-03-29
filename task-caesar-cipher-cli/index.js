#!/usr/bin/env node
console.log('Caesar cipher start.');
console.log('if use stdin: Exit on CTRL + C.');

const decode = require('./decode.js');

const transforms = require('./transform.js');
const cipherTransform = transforms.cipherTransform;

const argv = require('./argv.js');
let shiftVal = argv.shiftVal;
const inputPath = argv.inputPath;
const outputPath = argv.outputPath;
const action = argv.action;

const { pipeline } = require('stream');
const fs = require('fs');

shiftVal = action === 'encode' ? shiftVal : 26 - shiftVal;

pipeline(
  inputPath === 'console' ? process.stdin : fs.createReadStream(inputPath),
  new cipherTransform(shiftVal),
  outputPath === 'console'
    ? process.stdout
    : fs.createWriteStream(outputPath, { flags: 'a' }),
  err => {
    if (err) {
      console.log(`Failed with ${err}.`);
    } else {
      console.log('Process succeeded.');
    }
  }
);
