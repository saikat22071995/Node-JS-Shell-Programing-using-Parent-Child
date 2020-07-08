const util = require('util');
const exec = util.promisify(require('child_process').exec);

if (process.argv.length < 3) {
    console.log("Please Pass An Param");
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
} else {
    if (process.argv.length === 3) {
        async function readFile() {
            try {
                const { stdout, stderr } = await exec(`cat ${process.argv[2]} && pwd `);
                console.log('stdout:', stdout);
                console.log('stderr:', stderr);
            }
            catch (err) {
                console.error(err);
            };
        };
        readFile();
    } else {
        console.log('Please Only Provide One Param');
    }
}