import mongoose from "mongoose";

const mascarasSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  value: { type: String },
  img: { type: String }
},{ versionKey: false });

const mascaras = mongoose.model( 'mascaras', mascarasSchema );

export default mascaras;