import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  number: Number,
  type: String,
  price: Number,
});

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  rooms: [roomSchema],
});

export const Hotel = mongoose.model("Hotel", hotelSchema);
