const Order = require('../models/order');
const MenuItem = require('../models/menuItem');

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items.menuItem');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.placeOrder = async (req, res) => {
  try {
    const { tableNumber, items } = req.body;

    let totalPrice = 0;

    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItem);
      if (!menuItem) throw new Error(`Menu item not found: ${item.menuItem}`);
      totalPrice += menuItem.price * item.quantity;
    }

    const newOrder = new Order({
      tableNumber,
      items,
      totalPrice
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
