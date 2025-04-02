export const createBooking = async (req, res) => {
  try {
    res.status(201).json({ message: "Бронирование создано!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
