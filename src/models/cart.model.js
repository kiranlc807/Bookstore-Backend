import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref : 'users',
        require:true
    },
    bookId: { 
        type: Schema.Types.ObjectId, 
        ref: 'book',
        required: true 
    },
    quantity: { 
        type: Number,
        default: 1 
    },
    total:{
        type: Number,
        default: 0
    }
    },
    {
        timestamps: true
    }
);

export default model('Cart',cartSchema);