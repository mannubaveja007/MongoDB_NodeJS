const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);

const main = async () => {
  try {
    await client.connect();
    const db = client.db("PayME");
    const collection = db.collection("merchants"); 
    console.log("Connected to the database");
    
    // insertion
    const data1= {
      merchant_id:17,
      name:"Shubham Shingare",
      address:"Maharashtra"
    }
    const newvalues= {
      $set: 
      {merchant_id:18,
      name:"Utkarsh Mahajan",
      address:"Delhi"
    }}
    // await collection.insertOne(data1); // create
    // await collection.deleteOne({merchant_id : {$eq: 1}}) // delete
    // await collection.updateOne(data1,newvalues) // update




    
    const data = await collection.find().toArray();
    console.log(data);

    return "done"; 
    

  } catch (error) {
    console.error("Error connecting to the database: ", error);
  } finally {
    await client.close(); 
  }
};

main();
