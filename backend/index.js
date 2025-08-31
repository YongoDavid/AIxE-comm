import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroute.js";
import { connectDB } from "./db/connectDB.js"; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Is this the marix')
});
 
// Access request body
app.use(express.json());

app.use("/api/auth", authRoutes)

app.listen(5000,() =>{
  connectDB();
  console.log("Server is listening on port",+ PORT)
});