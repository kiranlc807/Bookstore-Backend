// address.controller.js
import * as AddressService from '../services/address.service';
import HttpStatus from 'http-status-codes';

export const addAddress = async (req, res) => {
  try {
    const address = await AddressService.addAddressService(req.user.userId, req.body);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: address,
      message: 'Address added successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const getAddressList = async (req, res) => {
  try {
    const addresses = await AddressService.getAddressListService(req.user.userId);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: addresses,
      message: 'Address list retrieved successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'Error fetching address list',
    });
  }
};

export const removeAddress = async (req, res) => {
  try {
    const addresses = await AddressService.removeAddressService(req.user.userId, req.params.addressIndex);
    console.log(req.params.addressIndex,"addresID");
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: addresses,
      message: 'Address removed successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

// addressController.js

export const setDefaultAddress=async(req, res)=>{
  try {
    await AddressService.updateDefaultAddress(req.user.userId, req.body.addressId);
    res.status(200).json({ message: 'Default address updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}



