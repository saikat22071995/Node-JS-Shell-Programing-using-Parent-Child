const util = require('util');
// const { stdout } = require('process');
const exec = util.promisify(require('child_process').exec);

process.on('message',  async (msg) => {
    console.log('Message from parent and taking the file param in child :', msg);
    // console.log(`cat ${msg}`)
    const { stdout, stderr } =  await exec(`cat ${msg}`);
            process.send({filecontent:stdout})
            process.exit(-1);  
    });
    