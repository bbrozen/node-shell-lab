
module.exports = function(done){
    const fs = require('fs');
    fs.readdir('./', 'utf8', (err,files) =>{
        if(err){
            done('error!');
        }
        else {
            done(files.join('\n'));
        }
    } );
    
   
};