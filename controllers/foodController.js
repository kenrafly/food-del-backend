import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let imageFileName = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: imageFileName,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (err) {
    res.json({ success: false, message: err });
  }
};

//all food list
const list_food = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, foods });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

//remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    console.log(food);

    fs.unlink(`uploads/${food.image}`, async () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed successfully" });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};
export { addFood, list_food, removeFood };
