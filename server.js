import express from "express";
import mongoose from "mongoose";
import { body } from "express-validator";
import hotelRoutes from "./routes/hotel.routes.js";
import userRoutes from "./routes/user.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import validate from "./middlewares/validate.js"; 

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/hotel-booking")
  .then(() => console.log("MongoDB подключена"))
  .catch((err) => console.error("Ошибка подключения к MongoDB:", err));


app.post(
  "/hotels",
  [
    body("name").isString().withMessage("Название отеля должно быть строкой"),
    body("location").isString().withMessage("Локация должна быть строкой"),
    body("price").isNumeric().withMessage("Цена должна быть числом"),
    body("rooms").isInt({ min: 1 }).withMessage("Количество комнат должно быть ≥ 1"),
    validate,
  ],
  (req, res) => {
    res.json({ message: "Отель создан!" });
  }
);

app.post(
  "/users",
  [
    body("name").isString().withMessage("Имя должно быть строкой"),
    body("email").isEmail().withMessage("Некорректный email"),
    body("password").isLength({ min: 6 }).withMessage("Пароль должен быть ≥ 6 символов"),
    validate,
  ],
  (req, res) => {
    res.json({ message: "Пользователь создан!" });
  }
);

app.use("/hotels", hotelRoutes);
app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
