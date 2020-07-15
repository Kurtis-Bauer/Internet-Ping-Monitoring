/*
const { spawn } = require("child_process");

const ls = spawn("ls", ["-la"]);

ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
*/

process.stdout.write("Started ");

var spawn = require('child_process').spawn,
  fs = require('fs');

  process.stdout.write("Spawned ");

var logFile = fs.createWriteStream("pingtest.txt", {flags:"w",mode:0777});

process.stdout.write("Created log file ");

var pingCmd = spawn("ping", ["-t", "www.google.com"]);

process.stdout.write("Began ping ");

var tmp = "";
pingCmd.stdout.on("data", function(buffer){
    tmp += buffer.toString();
    
    process.stdout.write("To string ");


        process.stdout.write(tmp, 'binary');

        logFile.write(tmp, 'binary');
		tmp = "";


});