import express from "express";
import { body } from "express-validator";
import { createHotel } from "../controllers/hotelController.js";
import validate from "../middlewares/validate.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Название должно быть не менее 3 символов"),
    body("location").isString().withMessage("Местоположение обязательно"),
    body("pricePerNight")
      .isFloat({ min: 1 })
      .withMessage("Цена должна быть больше 0"),
    body("amenities")
      .isArray()
      .withMessage("Удобства должны быть в формате массива"),
    validate,
  ],
  createHotel
);

export default router;
