import { Router } from "express";
import { create, edit, get, list, remove } from "../controller/product";
import { userById } from "../controller/user";
import { checkAuth, isAdmin, isAuth, requiredSingIn } from "../middlewares/checkAuth";

const router = Router();
//get all products
router.get('/products', checkAuth, list);
//get product
router.get('/products/:id', checkAuth, get);
//delete product
router.delete('/products/:id/:userId', requiredSingIn, isAuth, isAdmin, remove);
//edit product
router.put('/products/:id/:userId', requiredSingIn, isAuth, isAdmin, edit);
//add product
router.post('/products/:userId', requiredSingIn, isAuth, isAdmin, create);
// router.post('/products', create);

router.param('userId', userById)

export default router;

