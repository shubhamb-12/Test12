const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose.connect(DB).then(() => {
  console.log("Connected to database");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
