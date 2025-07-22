import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SizesExample() {
  return (
    <>
      <div className="d-flex gap-2 mb-2">
         <Link to="/order">
        <Button  variant="success" size="lg">Place Order</Button>
        </Link>
        <Link to="/menu">
          <Button variant="primary" size="lg">Menu</Button>
        </Link>
       
      </div>
     
    </>
  );
}

export default SizesExample;
