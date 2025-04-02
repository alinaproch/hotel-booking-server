import express from "express";
import { body } from "express-validator";
import bookingController from "../controllers/bookingController.js";
import validate from "../middlewares/validate.js";

const router = express.Router();


router.post(
  "/",
  [
    body("userId").isMongoId().withMessage("Некорректный ID пользователя"),
    body("hotelId").isMongoId().withMessage("Некорректный ID отеля"),
    body("startDate").isISO8601().withMessage("Дата начала должна быть в формате ISO8601"),
    body("endDate").isISO8601().withMessage("Дата окончания должна быть в формате ISO8601"),
    body("totalPrice").isFloat({ min: 0.01 }).withMessage("Цена должна быть больше 0"),
    validate
  ],
  bookingController.createBooking
);


router.patch(
  "/:id",
  [
    body("startDate").optional().isISO8601().withMessage("Дата начала должна быть в формате ISO8601"),
    body("endDate").optional().isISO8601().withMessage("Дата окончания должна быть в формате ISO8601"),
    body("totalPrice").optional().isFloat({ min: 0.01 }).withMessage("Цена должна быть больше 0"),
    validate,
  ],
  bookingController.updateBooking
);

export default router;
