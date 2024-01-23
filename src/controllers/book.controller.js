import * as BookService from '../services/book.service';
import HttpStatus from 'http-status-codes';

export const getAllBooks = async (req,res)=>{
    try{
        const allBooks = await BookService.getAllBooks();
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:allBooks,
            message:'Retrived all the books Successfully'
        });
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code:HttpStatus.OK,
            message:error.message
        });
    }
};

export const GetBookByID = async(req,res)=>{
    try{
        const book = await BookService.GetBookByID(req.params.id);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:book,
            message:"Retrived Successfully"
        });
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code:HttpStatus.OK,
            message:error.message
        });
    }
}

export const sortByPrice = async (req,res)=>{
    try{
        const sortedBooks = await BookService.sortByPrice(req.params.sort);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:sortedBooks,
            message:'Sorted Based On Request'
        });
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code:HttpStatus.OK,
            message:error.message
        });
    }
};

export const getSearchBooks = async (req,res) => {
    try{
        const book = await BookService.getSearchBooks(req.body.bookName);
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:book,
            message:'feached Successfully'
        });
    }catch(error){
        res.status(HttpStatus.BAD_REQUEST).json({
            code:HttpStatus.OK,
            message:error.message
        });
    }
}