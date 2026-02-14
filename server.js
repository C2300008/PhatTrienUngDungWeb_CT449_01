const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
  try {
    //connect to database
    await MongoDB.connect(config.db.uri);

    console.log("Connected to the database successfully.");
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(); // Exit the process with failure
  }
}
startServer();
