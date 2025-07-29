
const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const cartItem = await Cart.create({ itemId, quantity });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};
