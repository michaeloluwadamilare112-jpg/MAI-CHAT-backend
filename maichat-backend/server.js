import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import chatRoutes from "./routes/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.use("/api/auth",authRoutes);
app.use("/api/chat",chatRoutes);

app.listen(5000,()=>{
  console.log("MAICHAT SaaS running");
});
