import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rafly21ardiansyah:tcilNKXVrOaUSmmw@cluster0.khv8s.mongodb.net/food-del"
    )
    .then(() => console.log("Database connected"));
};
