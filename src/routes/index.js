import express from "express";
import productRouter from "./products.js";
import articleRouter from "./articles.js";

const router = express.Router();

router.use("/products", productRouter);
router.use("/articles", articleRouter);

export default router;
