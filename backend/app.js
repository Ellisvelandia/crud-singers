const express = require("express");
const app = express();
const cors = require("cors");
const singerRoute = require("./routes/singersRoutes");

require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/api/v1", singerRoute);

app.listen(1000, () => {
  console.log("SERVER STARTED SUCCESFULLY");
});
