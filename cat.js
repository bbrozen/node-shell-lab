module.exports = function cat(fileName, done){
  const fs = require('fs');
    fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) {
        done('error!')
        
      };
      
      done(data);
    });
};