// address.model.js
import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  addresses: [
    {
      fullname: { type: String},
      mobile: { type: Number},
      address: { type: String},
      city: { type: String},
      state: { type: String},
      type: { type: String},
    },
  ],
});

const Address = mongoose.model('Address', addressSchema);

export default Address;
