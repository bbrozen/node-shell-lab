process.stdout.write('prompt > ');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
// pwd();

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    let dataType = data.toString().trim().includes(' ') ? 'twoWords' : 'oneWord';
    if(cmd === 'ls'){
            ls();
        }
    else if(cmd === 'pwd'){
            pwd();
        }
    else if (dataType === 'twoWords') {
        let words = cmd.split(' ');
        let command = words[0];
        let file = words[1];
        cat(file);
    }   
    else{
        process.stdout.write('you typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});

