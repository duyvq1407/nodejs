import { Router } from "express";
import { addCate, editCate, listCate, read, removeCate } from "../controller/category";
import { userById } from "../controller/user";
import { isAdmin, isAuth, requiredSingIn } from "../middlewares/checkAuth";

const router = Router();

router.post('/categories/:userId', requiredSingIn, isAuth, isAdmin, addCate);
router.put('/categories/:id/:userId', requiredSingIn, isAuth, isAdmin, editCate);
router.delete('/categories/:id/:userId', requiredSingIn, isAuth, isAdmin, removeCate);
router.get('/categories/:id', read);
router.get('/categories', listCate);

router.param('userId', userById)

export default router