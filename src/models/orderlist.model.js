// order.model.js
import { Schema, model } from 'mongoose';

const orderItemSchema = new Schema({
  book_id: { type: String, required: true },
  bookImage: { type: String, },
  bookName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const addressSchema = new Schema({
  address: { type: String, },
  city: { type: String,  },
  state: { type: String, },
  type: { type: String,  },
});

const orderSchema = new Schema({
  user_id: { type: String, required: true },
  orderData: [
    {
      items: [orderItemSchema],
      total: { type: Number, default: 0 },
      orderDate: { type: Date },
      address: [addressSchema],
    },
  ],
});

export default model('Order', orderSchema);
