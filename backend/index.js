import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:3000", credentials: true}));

// Access request body
app.use(express.json());// Access request body
app.use(cookieParser()); // Allows to parse incoming cookies 

app.use("/api/auth", authRoutes)

app.listen(5000,() =>{
  connectDB();
  console.log("Server is listening on port",+ PORT)
});