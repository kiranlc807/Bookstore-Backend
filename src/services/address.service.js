// address.service.js
import Address from "../models/address.model";
import { mongoose } from "mongoose";

export const addAddressService = async (userId, addressData) => {
  try {
    const address = await Address.findOne({ userId });

    if (!address) {
      // If no existing address, create a new one
      const newAddress = new Address({
        userId,
        addresses: [addressData],
      });
      await newAddress.save();
      return newAddress;
    } else {
      // If user already has addresses, add the new address to the array
      address.addresses.push(addressData);
      await address.save();
      return address;
    }
  } catch (error) {
    throw new Error('Error adding address');
  }
};

export const getAddressListService = async (userId) => {
  try {
    const address = await Address.findOne({ userId });
    return address ? address.addresses : [];
  } catch (error) {
    throw new Error('Error fetching address list');
  }
};



export const removeAddressService = async (userId, addressID) => {
  try {
    // Find the address document for the user
    const address = await Address.findOne({ userId });

    if (!address || !address.addresses || address.addresses.length === 0) {
      throw new Error('Address not found');
    }

    // const addressIdObject = mongoose.Types.ObjectId(addressID);

    // Find the index of the address with the specified addressID
    // const addressIndex = address.addresses.findIndex(addr => addr._id.equals(addressIdObject));
    
    // Find the index of the address with the specified addressID
    const addressIndex = address.addresses.findIndex(addr => addr._id.equals(addressID));
    
    if (addressIndex === -1) {
      throw new Error('Address not found with the specified addressID');
    }

    // Remove the address at the specified index
    address.addresses.splice(addressIndex, 1);
    
    // Save the updated address document
    await address.save();

    return address.addresses;
  } catch (error) {
    console.error(error);
    throw new Error('Error removing address');
  }
};




export const updateDefaultAddress=async(userId, addressId)=>{
  try {
    const addresses = await Address.findOne({ userId });
    if (!addresses) {
      throw new Error('Addresses not found');
    }

    const addressIndex = addresses.addresses.findIndex(address => address._id.equals(addressId));
    if (addressIndex === -1) {
      throw new Error('Address not found');
    }

    const newDefaultAddress = addresses.addresses[addressIndex];
    if (newDefaultAddress.default === true) {
      // If the new address is already the default, no need to proceed further
      return;
    }

    // Update new default address
    newDefaultAddress.default = true;

    // Find and update the previous default address, if any
    const previousDefaultAddress = addresses.addresses.find(address => address.default === true && !address._id.equals(addressId));
    if (previousDefaultAddress) {
      previousDefaultAddress.default = false;
    }

    await addresses.save();
  } catch (error) {
    throw error;
  }
}


