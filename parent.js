const util = require('util');
const { fork } = require('child_process');
const forked = fork('child.js');
if (process.argv.length < 3) {
    console.log("Please Pass An Param");
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}else{
    forked.on('message', (msg) => {
        console.log('Message from child , Showing In Parent : ',msg);
      });
      forked.send( process.argv[2] );
}






