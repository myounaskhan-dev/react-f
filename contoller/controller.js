import Food from "../module/foodmodule.js";

const addfood = async (req, res) => {
  try {
    const { name, price, image, category, description } = req.body;

    const newFood = await Food.create({
      name,
      price,
      image,
      category,
      description,
    });

    res.status(201).json({
      message: "Food added successfully",
      food: newFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Food not added",
      error: error.message,
    });
  }
};

const getfoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json({
      foods,
    });
  } catch (error) {
    res.status(500).json({
      message: "Foods not found",
      error: error.message,
    });
  }
};

const getfood = async (req, res) => {
  try {
    const singleFood = await Food.findById(req.params.id);

    res.status(200).json({
      food: singleFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Food not found",
      error: error.message,
    });
  }
};

const deletefood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Food not deleted",
      error: error.message,
    });
  }
};

export {
  addfood,
  getfoods,
  getfood,
  deletefood,
};