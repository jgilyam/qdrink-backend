import { body, param } from "express-validator";

export const editValidatorRule = () => [
    param("drinkId")
    .isMongoId()
  ];

export const addValidatorRule = () => [
    body("name")
    .notEmpty()
    .isString(),
    body("description")
    .notEmpty()
    .isString(),
    body("priceLiter")
    .notEmpty()
    .isFloat({ min:0 })
    .toFloat(),
    body("alcoholContent")
    .notEmpty()
    .isString(),
];