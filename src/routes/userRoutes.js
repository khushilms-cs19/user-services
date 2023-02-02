import { Router } from 'express';
const router = Router();

import userControllers from '../controllers/userControllers.js';

router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUser);
router.post('/', userControllers.createUser);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser); 

export default router;