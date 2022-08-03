module.exports = function cat(fileName){
  const fs = require('fs');
    fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
};