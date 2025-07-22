import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SizesExample() {
  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <Link to="/menu">
          <Button variant="primary" size="lg">Menu</Button>
        </Link>
        <Link to="/staff">
        <Button  variant="success" size="lg">Staff</Button>
        </Link>
      </div>
      <div className="d-flex gap-2">
        <Link to='/table'>
        <Button variant="warning" size="lg">
          Table
        </Button>
        </Link>
       
      </div>
    </>
  );
}

export default SizesExample;
