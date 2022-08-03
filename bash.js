process.stdout.write('prompt > ');
const pwd = require('./pwd');
const ls = require('./ls');
// pwd();

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'ls'){
            ls();
        }
    
});

