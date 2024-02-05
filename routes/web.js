import express from 'express';
const router = express.Router();
import { homeController } from '../controllers/homeController.js';
import {storageController} from '../controllers/storageController.js';
import { expanseController } from '../controllers/expanseController.js';

router.get('/', homeController);
router.get('/store',storageController);
router.get('/add-expanse', expanseController);


export default router;