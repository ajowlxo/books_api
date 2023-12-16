import express from "express";
import mongoose from "mongoose";
import bookRoute from "./Routes/bookRoute.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

//middleware

app.use(express.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));

//usage of route

app.use("/books", bookRoute);
