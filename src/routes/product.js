import { Router } from "express";
import { create, edit, get, list, remove } from "../../controller/product";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();
//get all products
router.get('/products', checkAuth, list);
//get product
router.get('/products/:id', checkAuth, get);
//delete product
router.delete('/products/:id', checkAuth, remove);
//edit product
router.put('/products/:id', checkAuth, edit);
//add product
router.post('/products', checkAuth, create);

export default router;

