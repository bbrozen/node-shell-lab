module.exports = function(done) {

    
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        if(cmd === 'pwd'){
               done(process.cwd());
            }
        
            
        else{
            done('you typed: ' + cmd);
        }
         
    });
    
};
