import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './css/adminpage.css'; // adjust if your CSS file is in a different folder

function SizesExample() {
  return (
    <div className="landing-wrapper">
      <div className="button-group">
        <div className="d-flex gap-3 mb-3 justify-content-center">
          <Link to="/menu">
            <Button variant="primary" size="lg">Menu</Button>
          </Link>
          <Link to="/staff">
            <Button variant="success" size="lg">Staff</Button>
          </Link>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/allorderpage">
            <Button variant="primary" size="lg">View Orders</Button>
          </Link>
          <Link to="/table">
            <Button variant="warning" size="lg">Table</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SizesExample;
