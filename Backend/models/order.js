const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  tableNumber: Number,
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ['Pending', 'Served'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('Order', orderSchema);
