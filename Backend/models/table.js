const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  isOccupied: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Table', tableSchema);
