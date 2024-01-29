import express from 'express';
import * as BookController from '../controllers/book.controller';
import {userAuth} from '../middlewares/auth.middleware';
const router = express.Router();

router.get('',userAuth,BookController.getAllBooks);

router.post('/search',userAuth,BookController.getSearchBooks);

router.get('/:id',userAuth,BookController.GetBookByID);

router.get('/sortBy/:sort',userAuth,BookController.sortByPrice);



export default router;