const { inherits } = require('util');

const execSync = require('child_process').execSync;

const project = process.argv[2];

if(!project){
    console.log("No project was passed in to command - aborting");
}

execSync("http-server ./dist/apps/"+project+" -P http://localhost:4300", {stdio: "inherit"})