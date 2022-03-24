import { Router } from "express";
import { addCate, read } from "../controller/category";

const router = Router();

router.post('/category', addCate);
router.get('/category/:id', read);

export default router