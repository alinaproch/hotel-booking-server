import express from "express";
import { body } from "express-validator";
import { createUser } from "../controllers/userController.js";
import validate from "../middlewares/validate.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().isLength({ min: 3 }).withMessage("Имя должно быть не менее 3 символов"),
    body("email").isEmail().withMessage("Некорректный email"),
    body("password").isLength({ min: 6 }).withMessage("Пароль должен содержать минимум 6 символов"),
    validate,
  ],
  createUser
);

export default router;
