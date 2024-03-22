import mongoose from "mongoose";

const asesorSchema = new mongoose.Schema(
    {
      firstName: { type: String, required: true, trim: true },
      secondName: { type: String, required: true, trim:true },
      phone: {type: Number, required: true},
      availability: {type: String, required: true, default: 'Active'},
      code: {type: Number, required: true, unique: true},
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      status: {type: String, required:true, default: 'UNVERIFIED'},
      role: {type: String, default: 'Asesor'}
    }, 
    {timestamps: true}
  );
  
  export default mongoose.model("Asesor", asesorSchema, "users");