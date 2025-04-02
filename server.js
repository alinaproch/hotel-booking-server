import express from "express";
import mongoose from "mongoose";
import hotelRoutes from "./routes/hotel.routes.js";
import userRoutes from "./routes/user.routes.js";
import bookingRoutes from "./routes/booking.routes.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/hotel-booking")
  .then(() => console.log("MongoDB подключена"))
  .catch((err) => console.error("Ошибка подключения к MongoDB:", err));

app.use("/hotels", hotelRoutes);
app.use("/users", userRoutes);
app.use("/bookings", bookingRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(` Сервер запущен на порту ${PORT}`));
