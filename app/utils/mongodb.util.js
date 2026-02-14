const { MongoClient } = require("mongodb"); // Import MongoClient from mongodb package

class MongoDB {
  static connect = async (uri) => {
    if (this.client) return this.client; // Return existing client if already connected

    this.client = await MongoClient.connect(uri); // Connect to MongoDB server
    return this.client; // Return the connected client
  };
}

module.exports = MongoDB; // Export the MongoDB class
