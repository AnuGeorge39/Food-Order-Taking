import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';

export default function StaffPage() {
  const [staffList, setStaffList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', role: 'staff', username: '', password: '' });

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/staff');
      setStaffList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShow = (staff = null) => {
    if (staff) {
      setEditingStaff(staff);
      setFormData({
        name: staff.name,
        email: staff.email,
        contact: staff.contact,
        role: staff.role,
        username: staff.username,
        password: staff.password
      });
    } else {
      setEditingStaff(null);
      setFormData({ name: '', email: '', contact: '', role: 'staff', username: '', password: ''  });
    }
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: '', email: '', contact: '', role: 'staff', username: '', password: '' });
    setEditingStaff(null);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStaff) {
        await axios.put(`http://localhost:5000/api/staff/${editingStaff._id}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/staff', formData);
      }
      fetchStaffList();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this staff member?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/staff/${id}`);
      fetchStaffList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Staff Management</h2>
      <Button onClick={() => handleShow()} variant="primary" className="mb-3">
        Add New Staff
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Role</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff._id}>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.contact}</td>
              <td>{staff.role}</td>
              <td>{staff.username}</td>
              <td>{staff.password}</td>
              <td>
                <Button size="sm" variant="warning" onClick={() => handleShow(staff)} className="me-2">
                  Edit
                </Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(staff._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingStaff ? 'Edit Staff' : 'Add New Staff'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
              />
              </Form.Group>
               <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="text"
                value={formData.password}
                onChange={handleChange}
                required
              />
              </Form.Group>
            <Button variant="success" type="submit">
              {editingStaff ? 'Update' : 'Add'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
