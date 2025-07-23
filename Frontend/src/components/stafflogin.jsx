import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './css/stafflogin.css'; // Make sure the path is correct

function SizesExample() {
  return (
    <div className="staff-login-wrapper">
      <div className="staff-login-buttons">
        <Link to="/order">
          <Button variant="success" size="lg">Place Order</Button>
        </Link>
        <Link to="/menu">
          <Button variant="primary" size="lg">Menu</Button>
        </Link>
      </div>
    </div>
  );
}

export default SizesExample;
