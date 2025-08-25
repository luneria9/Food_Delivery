import foodModel from "../models/foodModel.js";
import fs from "fs"

// add food item

const addFood = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const { name, description, price, category } = req.body;
    
    // Validate required fields
    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: 'Name, price, and category are required'
      });
    }

    const food = new Food({
      name,
      description,
      price,
      category,
      image: req.file.filename // This should now work
    });

    await food.save();
    
    res.status(201).json({
      success: true,
      message: 'Food added successfully',
      food
    });

  } catch (error) {
    console.error('Error adding food:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

export {addFood,listFood}