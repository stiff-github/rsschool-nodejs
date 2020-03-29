const util = require('util');
const stream = require('stream');

const pipeline = util.promisify(stream.pipeline);

(request = util.promisify(require('request'))),
  (fsp = require('fs')),
  (fs = fsp.promises);

async function run() {
  await pipeline(
    fs.createReadStream('./input.txt'),
    async function*(source) {
      for await (const chunk of source) {
        yield String(chunk).toUpperCase();
      }
    },
    fs.createWriteStream('./output.txt')
  );
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
