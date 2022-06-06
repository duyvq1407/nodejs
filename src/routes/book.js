import { Router } from "express";
import { create, edit, get, list, remove, textSearch } from "../controller/book";
import { userById } from "../controller/user";
import { checkAuth, isAdmin, isAuth, requiredSingIn } from "../middlewares/checkAuth";

const router = Router();
//get all books
router.get('/books', checkAuth, list);
// router.get('/books/orderBy=:orderBy&key=:key', checkAuth, textSearch);
router.get('/books/search', checkAuth, textSearch);
//get product
router.get('/books/:id', checkAuth, get);
//delete product
router.delete('/books/:id', remove);
// router.delete('/books/:id/:userId', requiredSingIn, isAuth, isAdmin, remove);
//edit product
router.put('/books/:id', edit);
// router.put('/books/:id/:userId', requiredSingIn, isAuth, isAdmin, edit);
//add product
router.post('/books', create);
// router.post('/books/:userId', requiredSingIn, isAuth, isAdmin, create);
// router.post('/books', create);
// router.

router.param('userId', userById)


export default router;

