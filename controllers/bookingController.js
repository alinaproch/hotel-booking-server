import { Booking } from "../models/Booking.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user hotel");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking)
      return res.status(404).json({ message: "Бронирование не найдено" });
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking)
      return res.status(404).json({ message: "Бронирование не найдено" });
    res.json({ message: "Бронирование удалено" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
