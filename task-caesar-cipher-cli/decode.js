const caesarCipher = (str, key) => {
  let decode = '';
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      decode += String.fromCharCode(((c - 65 + parseInt(key)) % 26) + 65);
    } else if (c >= 97 && c <= 122) {
      decode += String.fromCharCode(((c - 97 + parseInt(key)) % 26) + 97);
    } else {
      decode += str.charAt(i);
    }
  }
  return decode;
};

module.exports = {
  caesarCipher
};
