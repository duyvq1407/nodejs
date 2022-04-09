import { Router } from "express";
import { create, edit, get, list, remove, textSearch } from "../controller/product";
import { userById } from "../controller/user";
import { checkAuth, isAdmin, isAuth, requiredSingIn } from "../middlewares/checkAuth";

const router = Router();
//get all products
router.get('/products', checkAuth, list);
// router.get('/products/orderBy=:orderBy&key=:key', checkAuth, textSearch);
router.get('/products/search', checkAuth, textSearch);
//get product
router.get('/products/:id', checkAuth, get);
//delete product
router.delete('/products/:id/:userId', requiredSingIn, isAuth, isAdmin, remove);
//edit product
router.put('/products/:id/:userId', requiredSingIn, isAuth, isAdmin, edit);
//add product
router.post('/products/:userId', requiredSingIn, isAuth, isAdmin, create);
// router.post('/products', create);
// router.

router.param('userId', userById)


export default router;

