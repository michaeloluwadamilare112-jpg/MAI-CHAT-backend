import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{
  const {email,password} = req.body;

  const hashed = await bcrypt.hash(password,10);

  const user = await User.create({
    email,
    password: hashed
  });

  res.json({message:"User created"});
};

export const login = async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user) return res.status(400).json({error:"User not found"});

  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.status(400).json({error:"Wrong password"});

  const token = jwt.sign({id:user._id},"SECRET_KEY");

  res.json({token});
};
