import mongoose from "mongoose";

const trendingSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  value: { type: String },
  img: { type: String }
},{ versionKey: false });

const trendings = mongoose.model( 'trendings', trendingSchema );

export default trendings;