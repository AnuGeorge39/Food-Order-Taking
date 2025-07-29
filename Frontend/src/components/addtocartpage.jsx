// CartPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/addtocart.css';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; // Make sure to install uuid: npm install uuid

export default function CartPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items');
      setMenuItems(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  const generateOrderId = () => {
    return 'ORD-' + uuidv4().slice(0, 8).toUpperCase(); // Example: ORD-1A2B3C4D
  };

  const addToCart = (item) => {
    if (cart.length === 0 && !orderId) {
      setOrderId(generateOrderId());
    }

    const existingItem = cart.find(ci => ci._id === item._id);
    if (existingItem) {
      setCart(cart.map(ci => ci._id === item._id ? { ...ci, quantity: ci.quantity + 1 } : ci));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item._id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);

    if (updatedCart.length === 0) {
      setOrderId('');
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="cart-container">
      <h2>Menu Items</h2>
      <div className="menu-list">
        {menuItems.map(item => (
          <div className="menu-card" key={item._id}>
            <h5>{item.name}</h5>
            <p>Price: €{item.price}</p>
            <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2 className="mt-4">Cart</h2>
          <h5>Order ID: <span className="order-id">{orderId}</span></h5>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price (€)</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item._id, e.target.value)}
                    />
                  </td>
                  <td>€{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item._id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: €{total.toFixed(2)}</h4>
        </>
      )}
    </Container>
  );
}
