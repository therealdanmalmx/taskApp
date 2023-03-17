// const {MongoClient} = require('mongodb');
// // const MongoClient = mongodb.MongoClient;

// const connectionURL = 'mongodb://localhost:27017'
// const databaseName = 'task-manager';


// MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    //     if (error) {
        //         return console.log('Unable to connect to database');
        //     }

        //     const db = client.db(databaseName);
        //     db.collection('users').insertOne({
            //         name: "Daniel",
            //         age: 51
            //     })

            //     console.log('Connected to database');
            // });

    const { MongoClient, ServerApiVersion } = require("mongodb");
    // Replace the placeholders with your credentials and hostname
    const uri = "mongodb://localhost:27017";
    const databaseName = 'task-manager';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

const db = client.db(databaseName)
db.collection('users').insertOne({
    name: "Daniel",
    age: 51
})
async function run() {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("You successfully connected to MongoDB!");
}
run();