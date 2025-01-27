const mongoose = require("mongoose");

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://Admin:Admin@notes.qchni.mongodb.net/");
  console.log("Mongo DB Connected");
};
