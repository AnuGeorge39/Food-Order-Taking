import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function RestaurantFooter() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* About Us */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              We serve freshly made, delicious food straight to your doorstep. Taste the passion in every bite!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#menu" className="text-light text-decoration-none">Menu</a></li>
              <Nav.Link href="/order" className="text-light">Menu</Nav.Link>
              <Nav.Link href="#about" className="text-light">About</Nav.Link>
              <li><a href="#home" className="text-light text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#order" className="text-light text-decoration-none">Order Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                123 Food Street, Flavor Town
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" />
                +1 234 567 890
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                yourschoice@foodrestaurant.com
              </li>
            </ul>
            {/* Social Icons */}
            <div className="d-flex mt-3">
              <a href="https://facebook.com" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-4 border-top pt-3">
          <small>&copy; {new Date().getFullYear()} Your Food Restaurant. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
