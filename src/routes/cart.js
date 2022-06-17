import { Router } from "express";
import { addToCart } from "../controller/cart";
import { userById } from "../controller/user";

const router = Router();

router.post('/cart/:userId', addToCart)


router.param('userId', userById)

export default router