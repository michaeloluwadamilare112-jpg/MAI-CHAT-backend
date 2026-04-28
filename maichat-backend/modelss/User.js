import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
