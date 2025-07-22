import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  const [staffshow, staffsetShow] = useState(false);
  const [adminshow, adminsetShow] = useState(false);
  const navigate = useNavigate(); // For redirection
  const staffhandleShow = () => {
  alert('Please enter your login details');
  staffsetShow(true);
};

const adminhandleShow = () => {
  alert('Please enter your login details');
  adminsetShow(true);
};
 // const staffhandleShow = () => staffsetShow(true);
  const staffhandleClose = () => staffsetShow(false);
  //const adminhandleShow = () => adminsetShow(true);
  const adminhandleClose = () => adminsetShow(false);

  const staffLogin = async (e) => {
  e.preventDefault();
  const username = e.target.elements.formUsername.value;
  const password = e.target.elements.formPassword.value;

  try {
    const response = await axios.post('http://localhost:5000/api/staff/login', {
      username,
      password
    });

    alert("Login successful!");
    staffhandleClose();
    navigate('/stafflogin'); 
  } catch (error) {
    console.error(error);
    alert("Invalid username or password!");
  }
};

  const adminLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements.adminformUsername.value;
    const password = e.target.elements.adminformPassword.value;

    if (username === 'admin' && password === 'admin123') {
      alert("Login details submitted!");
      adminhandleClose();
      navigate('/admin'); // redirect to admin page
    } else {
      alert("Invalid username or password!");
    }
  };
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           <Nav.Link onClick={staffhandleShow}>Staff</Nav.Link>
<Nav.Link onClick={adminhandleShow}>Admin</Nav.Link>
          </Nav>
          {/* Staff Login  */}
      <Modal show={staffshow} onHide={staffhandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Staff Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={staffLogin}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Admin Login  */}
      <Modal show={adminshow} onHide={adminhandleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={adminLogin}>
            <Form.Group className="mb-3" controlId="adminformUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="adminformPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;