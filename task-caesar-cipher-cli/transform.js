const { Transform } = require('stream');
const { StringDecoder } = require('string_decoder');
const decode = require('./decode.js');
const caesarCipher = decode.caesarCipher;

class cipherTransform extends Transform {
  constructor(key) {
    super();
    this._decoder = new StringDecoder('utf-8');
    this.key = key;
  }

  _transform(chunk, encoding, callback) {
    if (encoding === 'buffer') {
      chunk = this._decoder.write(chunk);
    }

    // Exit on CTRL + C.
    if (chunk === '\u0003') {
      process.exit();
    }

    const res = caesarCipher(chunk, this.key);

    callback(null, res);
  }
}

module.exports = {
  cipherTransform
};
