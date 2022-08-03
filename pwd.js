module.exports = function() {
const ls = require('./ls');
    
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        if(cmd === 'pwd'){
                process.stdout.write(process.cwd());
            }
        
            
        else{
            process.stdout.write('you typed: ' + cmd);
        }
        process.stdout.write('\nprompt > '); 
    });
    
};
