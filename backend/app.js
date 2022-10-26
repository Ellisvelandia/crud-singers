const express = require("express");
const app = express();
const singerRoute = require("./routes/singersRoutes");

require("./connection/conn");
app.use(express.json())
app.use("/api/v1/", singerRoute);

app.listen(1000, () => {
  console.log("SERVER STARTED SUCCESFULLY");
});
