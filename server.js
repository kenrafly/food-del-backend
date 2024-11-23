import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//App Config
const app = express();
const port = 4000;

//middleware it will parse the json data from the frontend
app.use(express.json());
app.use(cors());

//connect to mongoDB
connectDB();

//API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
  res.send("Hello World guys");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongodb+srv://rafly21ardiansyah:<db_password>@cluster0.khv8s.mongodb.net/?
// Model > Controller > Route > Server
