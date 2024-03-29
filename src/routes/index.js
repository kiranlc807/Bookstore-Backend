import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route'
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';
import addressRoute from './address.route';
import ordersRoute from './orderlist.route';

const routes = () => {
    router.get('/', (req, res) => {
      res.json('Welcome');
    });
    router.use('/users', userRoute);
    router.use('/books',bookRoute);
    router.use('/cart',cartRoute);
    router.use('/wishlist',wishlistRoute);
    router.use('/address',addressRoute);
    router.use('/orders',ordersRoute)
    return router;
};

export default routes;
