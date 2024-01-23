// address.service.js
import Address from "../models/address.model";

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

export const removeAddressService = async (userId, addressIndex) => {
  try {
    const address = await Address.findOne({ userId });

    if (!address || !address.addresses || address.addresses.length === 0) {
      throw new Error('Address not found');
    }

    // Remove the address at the specified index
    address.addresses.splice(addressIndex, 1);
    await address.save();

    return address.addresses;
  } catch (error) {
    throw new Error('Error removing address');
  }
};
