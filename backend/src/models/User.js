import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    secondName: { type: String, required: true, trim:true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: {type: String, required:true, default: 'UNVERIFIED'}
  },
  { timestamps: true },
  

);

export default mongoose.model("User", userSchema, "users");
