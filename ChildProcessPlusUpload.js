const http = require('http');
const {MongoClient} = require('mongodb');


// variables
const hostname = '127.0.0.1';
const port = 3000;
const uri = "mongodb://admin:admin@127.0.0.1:27017/test?authSource=admin";
const client = new MongoClient(uri);

// connect to db
async function main(){

    try{
        await client.connect(); 
        await listDatabases(client);

        // insert or update data
        await createListing(client,
            {
                name: "Lovely Loft",
                summary: "A charming loft in Paris",
                bedrooms: 1,
                bathrooms: tmp
            }
        );

    }
    catch (e){
        console.error(e);
    }
    finally {
        await client.close();
    }
}

//main().catch(console.error);

//list dbs
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function createListing(client, newListing){
    const result = await client.db("Pingdb").collection("Pingdb").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}


//Ping Data***
process.stdout.write("Started ");

var spawn = require('child_process').spawn,
  fs = require('fs');

  process.stdout.write("Spawned ");

//create local txt
var logFile = fs.createWriteStream("pingtest.txt", {flags:"w",mode:0777});

process.stdout.write("Created log file ");

//start pinging
var pingCmd = spawn("ping", ["-t", "www.google.com"]);

process.stdout.write("Began ping ");

//to string
var tmp = "";
pingCmd.stdout.on("data", function(buffer){
    tmp += buffer.toString();

        

        //output ping to console
        process.stdout.write(tmp, 'binary');

        //wring ping to local txt
        logFile.write(tmp, 'binary');

        tmp = "";
        
        

});
