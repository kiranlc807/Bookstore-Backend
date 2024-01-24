// import { Schema, model } from "mongoose";

// const cartSchema = new Schema({
//     userId:{
//         type:Schema.Types.ObjectId,
//         ref : 'users',
//         require:true
//     },
//     bookId: { 
//         type: Schema.Types.ObjectId, 
//         ref: 'book',
//         required: true 
//     },
//     quantity: { 
//         type: Number,
//         default: 1 
//     },
//     total:{
//         type: Number,
//         default: 0
//     }
//     },
//     {
//         timestamps: true
//     }
// );

// export default model('Cart',cartSchema);

// cart.model.js
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true, 
            unique: true 
        },
  books: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
      quantity: { type: Number, required: true },
      total: { type: Number, required: true },
    },
    ],
    totalQuantity: { 
        type: Number, 
        default: 0 
    },
    totalPrice: { 
        type: Number, 
        default: 0 
    },
    isParchese: {
      type: Boolean,
      default: false
    }
    });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
