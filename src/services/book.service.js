import { error } from '@hapi/joi/lib/base';
import Book from '../models/book.model';

export const getAllBooks = async ()=>{
    const books = await Book.find({});
    if(books.length==0){
        throw new Error("No Books Found");
    }else{
        return books;
    }
};

export const GetBookByID = async(bookId)=>{
    const book = await Book.findById(bookId);
    if(!book){
        throw new Error("Book Not Found")
    }else{
        return book;
    }
}

export const sortByPrice = async (sortBy)=>{
    
    const books = await Book.find({});
    if(sortBy=='low')
    {
        books.sort((x,y)=>x.discountPrice-y.discountPrice);
    }
    else if(sortBy=='high')
    {
        books.sort((x,y)=>y.discountPrice-x.discountPrice);
    }
    return books;
}

export const getSearchBooks = async (searchItem) => {
    
      const searchData = await Book.find({
        bookName: { $regex:String(searchItem), $options: 'i' },
      });
      if(!searchData)
      {
        throw new Error('Book Not Found')
      }
      else
      {
        return searchData;
      }
  };