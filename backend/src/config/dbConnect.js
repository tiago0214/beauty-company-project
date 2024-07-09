import mongoose from "mongoose";
import "dotenv/config";

export async function conectToDataBase(){
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}