
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Table } from 'react-bootstrap';
import './css/allorderpage.css';

export default function AllOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      setOrders(res.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">All User Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <Card key={order._id} className="mb-4 shadow-sm">
            <Card.Body>
              <h5>Order ID: <span className="text-primary">{order.orderId}</span></h5>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price (€)</th>
                    <th>Quantity</th>
                    <th>Subtotal (€)</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{(item.price * item.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <h5 className="text-end">Total: €{order.total}</h5>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}
