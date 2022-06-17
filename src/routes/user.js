import { Router } from 'express';
import { register, login, read, list } from '../controller/auth';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/account/:id', read);
router.get('/users', list);

export default router;