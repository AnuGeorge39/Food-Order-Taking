import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';

export default function TableManagement() {
  const [tables, setTables] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTable, setEditingTable] = useState(null);
  const [formData, setFormData] = useState({ tableNumber: '', capacity: '', isOccupied: false });

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/table');
      setTables(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShow = (table = null) => {
    if (table) {
      setEditingTable(table);
      setFormData({
        tableNumber: table.tableNumber,
        capacity: table.capacity,
        isOccupied: table.isOccupied
      });
    } else {
      setEditingTable(null);
      setFormData({ tableNumber: '', capacity: '', isOccupied: false });
    }
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ tableNumber: '', capacity: '', isOccupied: false });
    setEditingTable(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTable) {
        await axios.put(`http://localhost:5000/api/table/${editingTable._id}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/table', formData);
      }
      fetchTables();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this table?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/table/${id}`);
      fetchTables();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Table Management</h2>
      <Button onClick={() => handleShow()} variant="primary" className="mb-3">
        Add New Table
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Capacity</th>
            <th>Occupied</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table._id}>
              <td>{table.tableNumber}</td>
              <td>{table.capacity}</td>
              <td>{table.isOccupied ? 'Yes' : 'No'}</td>
              <td>
                <Button size="sm" variant="warning" onClick={() => handleShow(table)} className="me-2">
                  Edit
                </Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(table._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingTable ? 'Edit Table' : 'Add New Table'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Table Number</Form.Label>
              <Form.Control
                name="tableNumber"
                type="number"
                value={formData.tableNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Capacity</Form.Label>
              <Form.Control
                name="capacity"
                type="number"
                value={formData.capacity}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                name="isOccupied"
                type="checkbox"
                label="Occupied?"
                checked={formData.isOccupied}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              {editingTable ? 'Update' : 'Add'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
