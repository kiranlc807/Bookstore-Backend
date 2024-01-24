// order.controller.js
import * as OrderService from '../services/orderlist.service';
import HttpStatus from 'http-status-codes';

export const addOrder = async (req, res) => {
  try {
    const order = await OrderService.addOrderService(req.user.userId, req.body.addressId);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: order,
      message: 'Order Placed Successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const getOrderList = async (req, res) => {
  try {
    const orders = await OrderService.getOrderListService(req.user.userId);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: orders,
      message: 'Order List Retrieved Successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const removeOrder = async (req, res) => {
  try {
    const orderData = await OrderService.removeOrderService(req.user.userId, req.params.orderId);

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: orderData,
      message: 'Order Removed Successfully',
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message,
    });
  }
};
