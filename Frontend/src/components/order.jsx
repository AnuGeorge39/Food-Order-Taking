import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button, Form, Table, Row, Col } from 'react-bootstrap';


// Inside your component:

const handleStatusChange = async (orderId, newStatus) => {
  try {
    await axios.patch(`http://localhost:5000/api/orders/${orderId}/status`, {
      status: newStatus,
    });
    fetchOrders();
  } catch (err) {
    alert('Failed to update status');
  }
};

const handleDelete = async (orderId) => {
  if (window.confirm("Are you sure you want to delete this order?")) {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${orderId}`);
      fetchOrders();
    } catch (err) {
      alert('Failed to delete order');
    }
  }
};


export default function PlaceOrder() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchMenuItems();
    fetchOrders();
  }, []);

  const fetchMenuItems = async () => {
    const res = await axios.get('http://localhost:5000/api/items');
    setMenuItems(res.data);
  };

  const fetchOrders = async () => {
    const res = await axios.get('http://localhost:5000/api/orders');
    setOrders(res.data);
  };

  const handleQuantityChange = (menuItemId, quantity) => {
    setSelectedItems(prev => {
      const existing = prev.find(item => item.menuItem === menuItemId);
      if (existing) {
        return prev.map(item =>
          item.menuItem === menuItemId ? { ...item, quantity: Number(quantity) } : item
        );
      } else {
        return [...prev, { menuItem: menuItemId, quantity: Number(quantity) }];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tableNumber || selectedItems.length === 0) {
      alert('Please fill all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/orders', {
        tableNumber: Number(tableNumber),
        items: selectedItems,
      });
      alert('Order placed!');
      setTableNumber('');
      setSelectedItems([]);
      fetchOrders();
    } catch (err) {
      console.error(err);
      alert('Failed to place order.');
    }
  };

  const calculateOrderTotal = (items) => {
    return items.reduce((total, item) => {
      return total + item.menuItem.price * item.quantity;
    }, 0);
  };

  return (
    <Container className="mt-4">
      <h2>Place Order</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Table Number</Form.Label>
          <Form.Control
            type="number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Menu Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>₹{item.price.toFixed(2)}</td>
                <td>
                  <Form.Control
                    type="number"
                    min="0"
                    onChange={(e) =>
                      handleQuantityChange(item._id, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button type="submit" variant="success">
          Submit Order
        </Button>
      </Form>

      <hr className="my-5" />

      <h3>All Placed Orders</h3>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="mb-4 border p-3 rounded shadow-sm">
            <h5>Table #{order.tableNumber}</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.menuItem.name}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.menuItem.price.toFixed(2)}</td>
                    <td>₹{(item.quantity * item.menuItem.price).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" className="text-end fw-bold">Total:</td>
                  <td className="fw-bold">₹{calculateOrderTotal(order.items).toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))
      )}
    </Container>
  );
}
