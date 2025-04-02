import express from "express";
import { body } from "express-validator";
import validate from "../middlewares/validate.js";
import {
  createBooking,
  updateBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post(
  "/",
  [
    body("userId")
      .isMongoId()
      .withMessage("userId должен быть валидным MongoDB ObjectId"),
    body("hotelId")
      .isMongoId()
      .withMessage("hotelId должен быть валидным MongoDB ObjectId"),
    body("checkInDate")
      .isISO8601()
      .withMessage("checkInDate должен быть валидной датой"),
    body("checkOutDate")
      .isISO8601()
      .withMessage("checkOutDate должен быть валидной датой"),
  ],
  validate,
  createBooking
);

router.patch(
  "/:id",
  [
    body("checkInDate")
      .optional()
      .isISO8601()
      .withMessage("checkInDate должен быть валидной датой"),
    body("checkOutDate")
      .optional()
      .isISO8601()
      .withMessage("checkOutDate должен быть валидной датой"),
  ],
  validate,
  updateBooking
);

export default router;
