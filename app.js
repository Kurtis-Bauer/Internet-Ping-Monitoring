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
                bathrooms: 1
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

main().catch(console.error);

//list dbs
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// ceate server
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