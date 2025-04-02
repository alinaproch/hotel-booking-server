export const createHotel = async (req, res) => {
  try {
    res.status(201).json({ message: "Отель создан!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
