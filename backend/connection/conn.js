const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ellis:test@cluster0.xebapck.mongodb.net/crudop?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"));
