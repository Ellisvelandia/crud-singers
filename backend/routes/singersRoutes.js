const router = require("express").Router();
const singerModel = require("../models/singersModel");

router.post("/add", async (req, res) => {
  try {
    const newSinger = new singerModel(req.body);
    await newSinger.save().then(() => {
      res.status(200).json({ message: " Singer Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
