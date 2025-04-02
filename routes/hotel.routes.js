import express from "express";
import { body } from "express-validator";
import validate from "../middlewares/validate.js";
import { createHotel, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().withMessage("Название отеля должно быть строкой"),
    body("location").isString().withMessage("Локация должна быть строкой"),
    body("price").isNumeric().withMessage("Цена должна быть числом"),
    body("rooms")
      .isInt({ min: 1 })
      .withMessage("Количество комнат должно быть целым числом ≥ 1"),
  ],
  validate,
  createHotel
);

router.patch(
  "/:id",
  [
    body("name")
      .optional()
      .isString()
      .withMessage("Название отеля должно быть строкой"),
    body("location")
      .optional()
      .isString()
      .withMessage("Локация должна быть строкой"),
    body("price").optional().isNumeric().withMessage("Цена должна быть числом"),
    body("rooms")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Количество комнат должно быть целым числом ≥ 1"),
  ],
  validate,
  updateHotel
);

export default router;
