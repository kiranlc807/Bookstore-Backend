// // order.service.js
// import Order from '../models/order.model';
// import Cart from '../models/cart.model';
// import Address from '../models/address.model';
// import Book from '../models/book.model';

// export const addOrderService = async (userId) => {
//   try {
//     // Find the user's cart items
//     const cartItems = await Cart.findOne({ userId });

//     if (!cartItems) {
//       throw new Error('Cart is empty. Cannot create order.');
//     }

//     // Fetch the user's default address
//     const defaultAddress = await Address.findOne({ userId, isDefault: true });

//     if (!defaultAddress) {
//       throw new Error('User does not have a default address. Please provide an address.');
//     }

//     // Calculate the total for the order
//     const total = calculateOrderTotal(cartItems.books);

//     // Create orderData based on cart items
//     const orderData = {
//       items: await Promise.all(cartItems.books.map(async (cartItem) => {
//         const book = await Book.findById(cartItem.bookId);

//         if (!book) {
//           throw new Error(`Book with ID ${cartItem.bookId} not found.`);
//         }

//         return {
//           book_id: cartItem.bookId,
//           bookImage: book.image,
//           bookName: book.name,
//           price: book.discountPrice,
//           quantity: cartItem.quantity,
//         };
//       })),
//       total,
//       orderDate: new Date(),
//       address: {
//         address: defaultAddress.address,
//         city: defaultAddress.city,
//         state: defaultAddress.state,
//         type: defaultAddress.type,
//       },
//     };

//     // Create the order
//     const order = new Order({
//       user_id: userId,
//       orderData: [orderData],
//     });

//     // Save the order and remove cart items
//     await order.save();
//     await Cart.findOneAndDelete({ userId });

//     return order;
//   } catch (error) {
//     throw new Error(`Error creating order: ${error.message}`);
//   }
// };

// // Helper function to calculate the total for an order
// const calculateOrderTotal = (cartItems) => {
//   return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.total, 0);
// };

// order.service.js
// order.service.js
// import Order from '../models/orderlist.model';
// import Cart from '../models/cart.model';
// import Book from '../models/book.model';
// import Address from '../models/address.model';

// export const addOrderService = async (userId, addressId) => {
//   try {
//     // Find the user's cart items
//     const cartItems = await Cart.findOne({ userId });

//     if (!cartItems || cartItems.books.length === 0) {
//       throw new Error('Cart is empty. Cannot create order.');
//     }
//     console.log("Id",addressId);
//     // Fetch the user's chosen address
//     const userAddresses = await Address.findOne({userId:userId});
//     console.log(userAddresses);
//     if (!chosenAddress) {
//       throw new Error('Chosen address not found. Please select a valid address.');
//     }
//     // Calculate the total for the order
//     // const total = calculateOrderTotal(cartItems.books);
//     const chosenAddress = addressId
//       ? userAddresses.addresses.find(address => address._id.equals(addressId))
//       : userAddresses.addresses[0];

//     console.log("Address-->",chosenAddress);
//     // Create orderData based on cart items
//     const orderData = {
//       items: await Promise.all(cartItems.books.map(async (cartItem) => {
//         const book = await Book.findById(cartItem.bookId);
    
//         if (!book) {
//           throw new Error(`Book with ID ${cartItem.bookId} not found.`);
//         }

//         return {
//           book_id: cartItem.bookId,
//           bookImage: book.bookImage,
//           bookName: book.bookName,
//           price: book.discountPrice,
//           quantity: cartItem.quantity,
//         };
//       })),
//       total:cartItems.totalPrice,
//       orderDate: new Date(),
//       address: [
//         {
//           address: chosenAddress.address,
//           city: chosenAddress.city,
//           state: chosenAddress.state,
//           type: chosenAddress.type,
//         },
//       ],
//     };

//     // Create the order
//     const order = new Order({
//       user_id: userId,
//       orderData: [orderData],
//     });

//     // Save the order and remove cart items
//     await order.save();
//     await Cart.findOneAndDelete({ userId });

//     return order;
//   } catch (error) {
//     throw new Error(`Error creating order: ${error.message}`);
//   }
// };

// order.service.js
import Order from '../models/orderlist.model';
import Cart from '../models/cart.model';
import Book from '../models/book.model';
import Address from '../models/address.model';

export const addOrderService = async (userId, addressId) => {
  try {
    // Find the user's cart items
    const cartItems = await Cart.findOne({ userId });

    if (!cartItems || cartItems.books.length === 0) {
      throw new Error('Cart is empty. Cannot create order.');
    }

    // Fetch the user's addresses
    const userAddresses = await Address.findOne({ userId });

    if (!userAddresses || userAddresses.addresses.length === 0) {
      throw new Error('User does not have any addresses.');
    }

    // Find the chosen address by ID, or use the first address if ID is not provided
    const chosenAddress = addressId
      ? userAddresses.addresses.find(address => address._id.equals(addressId))
      : userAddresses.addresses[0];

    if (!chosenAddress) {
      throw new Error('Chosen address not found. Please select a valid address.');
    }

    // Calculate the total for the order
    // const total = calculateOrderTotal(cartItems.books);

    // Create orderData based on cart items
    const orderData = {
      items: await Promise.all(cartItems.books.map(async (cartItem) => {
        const book = await Book.findById(cartItem.bookId);

        if (!book) {
          throw new Error(`Book with ID ${cartItem.bookId} not found.`);
        }
        console.log(book);
        return {
          book_id: cartItem.bookId,
          bookImage: book.bookImage,
          bookName: book.bookName,
          price: book.discountPrice,
          quantity: cartItem.quantity,
        };
      })),
      total:cartItems.totalPrice,
      orderDate: new Date(),
      address: [
        {
          address: chosenAddress.address,
          city: chosenAddress.city,
          state: chosenAddress.state,
          type: chosenAddress.type,
        },
      ],
    };

    // // Create the order
    // const order = new Order({
    //   user_id: userId,
    //   orderData: [orderData],
    // });
    // Check if the user already has an order
    const existingOrder = await Order.findOne({ user_id: userId });

    if (existingOrder) {
      // If the user already has an order, update the existing order's orderData
      existingOrder.orderData.push(orderData);
      existingOrder.save();
    } else {
      // If the user does not have an order, create a new order
      const newOrder = new Order({
        user_id: userId,
        orderData: [orderData],
      });

      await newOrder.save();
    }

    // Save the order and remove cart items
    await Cart.findOneAndDelete({ userId });

    return ;
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};

export const getOrderListService = async (userId) => {
  try {
    const orders = await Order.find({ user_id: userId });
    return orders || [];
  } catch (error) {
    throw new Error('Error fetching order list');
  }
};

export const removeOrderService = async (userId, orderId) => {
  try {
    // Find the order
    const order = await Order.findOne({ user_id: userId, 'orderData._id': orderId });

    if (!order) {
      throw new Error('Order not found');
    }

    // Remove the order by filtering out the specified orderId
    order.orderData = order.orderData.filter(item => item._id.toString() !== orderId);

    // Save the updated order
    await order.save();

    return order.orderData; // Return the updated order data array
  } catch (error) {
    throw new Error('Error removing order');
  }
};

