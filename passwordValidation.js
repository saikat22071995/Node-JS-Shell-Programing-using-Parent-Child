let passwordModule=require('./passwordModule')
if (process.argv.length < 4) {
    console.log("Please Pass Required Param (eg: username and password)");
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
} else {
        if(process.argv.length===4){
            let testing_password_username=new passwordModule(process.argv[2],process.argv[3]);
            console.log(testing_password_username.checkUserAndPass())
        }else{
            console.log('Please Provide 2 Params')
        }  
    } 