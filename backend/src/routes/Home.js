import { Router } from 'express';

import HomeController from '../controllers/Home';

const router = new Router();

router.get('/', HomeController.index);
router.post('/', HomeController.store);

export default router;
