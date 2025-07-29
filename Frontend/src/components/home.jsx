import React from "react";
import "../components/css/home.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Dishes from "./dishes-carousel.jsx";
import { Carousel, Image,Card } from 'react-bootstrap';
import Slide_1 from '../assets/rest1.jpg';
import Slide_2 from '../assets/rest2.jpg';
import Slide_3 from '../assets/rest3.jpg';
import '../components/css/about.css';

export default function HomePage() {
  return (
    <div className="font-sans text-dark">
      {/* Hero Section */}
      <section className="hero-section text-white text-center py-5 px-3">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            🍽 Yours Choice
          </h1>
          <h3>
            Delicious Food Offered to You
          </h3>
          <p className="lead mb-4">Enjoy your favorite dishes without leaving home.</p>
           <Link to="/addtocart">
                     <button className="btn btn-light text-warning fw-semibold px-4 py-2">
            Order Now
          </button>
          </Link>
        </div>
      </section>

      <section className="py-5 bg-light text-center" id="poupular dishes">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">Our Popular Dishes</h2>
          <div className="row g-4">
         
         <Dishes/>

          </div>
          </div>
      </section>


     

      {/* About Section */}
      <section id="about">
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-6 fw-bold mb-3">About Our Restaurant</h2>
         
          <p className="mx-auto text-muted max-width-text">
            We bring you the best dishes from around the world, crafted with fresh
            ingredients and a passion for taste. Our mission is to make every meal
            an unforgettable experience.
          </p>
          <p className="mx-auto text-muted max-width-text">
            Whether you're ordering for a quick lunch, family dinner, or a special
            event, we are here to make it delicious and memorable.
          </p>
           <div className="d-flex justify-content-between">
          <Image className='slide_aboutimg' src={Slide_1} /> 
           <Image className='slide_aboutimg' src={Slide_2} /> 
          <Image className='slide_aboutimg' src={Slide_3} /> 
          </div>
        </div>
      </section>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4">What Our Customers Say</h2>
          <div className="row g-4">
            {[
              {
                quote: "Best pizza I've ever had! Fresh and so tasty.",
                name: "John D.",
              },
              {
                quote: "The burgers were juicy and the delivery was super fast.",
                name: "Sarah M.",
              },
              {
                quote: "Love the creamy pasta! I order it every week.",
                name: "Mark T.",
              },
            ].map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="bg-white p-4 rounded shadow-sm h-100">
                  <p className="fst-italic">"{testimonial.quote}"</p>
                  <h6 className="mt-3 fw-semibold">— {testimonial.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-white text-center py-5">
        <div className="container">
          <h2 className="display-6 fw-bold mb-3">Hungry? Order Now!</h2>
          <p className="mb-4">Your favorite dishes are just a click away.</p>
          <Link to="/addtocart">
          <button className="btn btn-light text-warning fw-semibold px-4 py-2">
            Start Ordering
          </button>
          </Link>
          
        </div>
      </section>

    </div>
  );
}
