// address.routes.js
import express from 'express';
import * as AddressController from '../controllers/address.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('', userAuth, AddressController.addAddress);
router.get('', userAuth, AddressController.getAddressList);
router.delete('/:addressIndex', userAuth, AddressController.removeAddress);

export default router;
