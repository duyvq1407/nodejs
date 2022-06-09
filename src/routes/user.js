import { Router } from 'express';
import { register, login, read, list, remove, edit } from '../controller/auth';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.put('/users/:id', edit);
router.delete('/users/:id', remove);
router.get('/users/:id', read);
router.get('/users', list);

export default router;