import { Router } from 'express';
import { register, login, read } from '../controller/auth';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/account/:id', read);

export default router;