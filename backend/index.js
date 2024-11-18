import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import axios from "axios";
import { product } from "./modals/productModal.js";
import route from "./routes/productRoutes.js";
import authRoute from './routes/auth.js'
import userRoute from './routes/User.js'
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin:'http://localhost:5173',
  credentials:true,
}));
app.use(express.json());
app.use(cookieParser())

//Product Routes
app.use('/api/products',route);
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);


dotenv.config()
mongoose.connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
    fetchAndStore(); // Fetch and store products after connecting to the database
  })
  .catch((e) => {
    console.log("MongoDB connection error:", e.message);
  });

async function fetchAndStore() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Check if products already exist to avoid duplicates
    const existingProducts = await product.countDocuments();
    if (existingProducts === 0) {
      await product.insertMany(products);
      console.log("Products added successfully");
    } else {
      console.log("Products already exist in the database");
    }

  } catch (error) {
    console.log("Error in fetchAndStore:", error.message);
  }
}
