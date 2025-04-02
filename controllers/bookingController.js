import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, hotelId, startDate, endDate, totalPrice } = req.body;

    const newBooking = new Booking({
      userId,
      hotelId,
      startDate,
      endDate,
      totalPrice,
    });

    await newBooking.save();
    res.status(201).json({ message: "Бронирование создано!", booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
