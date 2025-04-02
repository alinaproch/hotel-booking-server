import express from "express";
import { body } from "express-validator";
import validate from "../middlewares/validate.js";
import { createUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().withMessage("Имя должно быть строкой"),
    body("email").isEmail().withMessage("Email должен быть валидным"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Пароль должен содержать минимум 6 символов"),
  ],
  validate,
  createUser
);

router.patch(
  "/:id",
  [
    body("name").optional().isString().withMessage("Имя должно быть строкой"),
    body("email")
      .optional()
      .isEmail()
      .withMessage("Email должен быть валидным"),
    body("password")
      .optional()
      .isLength({ min: 6 })
      .withMessage("Пароль должен содержать минимум 6 символов"),
  ],
  validate,
  updateUser
);

export default router;
