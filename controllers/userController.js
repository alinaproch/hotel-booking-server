export const createUser = async (req, res) => {
  try {
    res.status(201).json({ message: "Пользователь создан!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
