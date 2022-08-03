process.stdout.write('prompt > ');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require("./curl");
// pwd();

const done = (output) => {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
};

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    let dataType = data.toString().trim().includes(' ') ? 'twoWords' : 'oneWord';
     let words = cmd.split(' ');
    let command = words[0];
    let file = words[1];
    if(cmd === 'ls'){
            ls(done);
        }
    else if(cmd === 'pwd'){
            pwd(done);
        }
    else if (dataType === 'twoWords') {
      
        if (command === 'cat'){
            cat(file, done);
        }
        else if(command === 'curl'){
            curl(file); //file here is the url argument
        }
    }   
    else{
        process.stdout.write('you typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});

