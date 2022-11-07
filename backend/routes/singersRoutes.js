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

// GET

router.get("/getSingers", async (req, res) => {
  let singers;
  try {
    singers = await singerModel.find();
    res.status(200).json({ singers });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getSingers/:id", async (req, res) => {
  let singer;
  const id = req.params.id;
  try {
    singer = await singerModel.findById(id);
    res.status(200).json({ singer });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE SINGERS BY ID

router.put("/updateSingers/:id", async (req, res) => {
  const id = req.params.id;
  const { name, image, web, description, Genre } = req.body;
  let singer;
  try {
    singer = await singerModel.findByIdAndUpdate(id, {
      name,
      image,
      web,
      description,
      Genre,
    });
    singer = await singer
      .save()
      .then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete Book BY id
router.delete("/deleteSinger/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await singerModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
