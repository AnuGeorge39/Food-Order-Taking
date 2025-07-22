import { Carousel, Image,Card } from 'react-bootstrap';
import Slide_1 from '../assets/burger2.jpg';
import Slide_2 from '../assets/chicken1.jpg';
import Slide_3 from '../assets/burger3.jpg';
import Slide_4 from '../assets/pizza1.jpg';
 import "./css/carousel.css";



function DishesCarousel() {
  return (
    <div className="container mt-5">
      
      <Carousel>
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <Card className="custom-cards-dishes">
             <Card.Body>
                <Image className='slide_img' src={Slide_1} /> 
                <Card.Title className="dishes">Burgers</Card.Title>
               <Card.Text>
                    "Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"
                </Card.Text>
                
            </Card.Body>
            </Card>
            
            <Card className="custom-cards-dishes">
            <Card.Body>
                <Image className='slide_img' src={Slide_2} />
                <Card.Title className="dishes">Fried Chicken</Card.Title>
               <Card.Text>
                 "popular dish made by coating chicken pieces with a seasoned batter or breading and then deep-frying or pan-frying them until they are golden brown and crispy."  
                  </Card.Text>
            </Card.Body>
             
            </Card>
            <Card className="custom-cards-dishes">
               <Image className='slide_img' src={Slide_3} />
              <Card.Body>
                <Card.Title className="dishes">Kids Burger</Card.Title>
                
                <Card.Text>
                  “The delicious meal, with tender meat and a tangy, flavourful sauce that is based on their desire.” 
                </Card.Text>
                
              </Card.Body>
              
            </Card>
            
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
          <Card className="custom-cards-dishes">
              
              <Card.Body>
               <Image className='slide_img' src={Slide_4} /> 
               <Card.Title className="dishes">Pizza</Card.Title>
                <Card.Text>
                 "The pizza tasted delightful ! " "The pizza had a splendid look, i was giddy with excitment!"
                </Card.Text>
                </Card.Body>
              </Card>
            
            <Card className="custom-cards-dishes">
              <Card.Body>
               <Image className='slide_img' src={Slide_1} /> 
               <Card.Title className="dishes">Burger</Card.Title>
                <Card.Text>
                  "Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"  
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className="custom-cards-dishes">
              <Card.Body>
                <Image className='slide_img' src={Slide_2} /> 
                <Card.Title className="dishes">Fried Chicken</Card.Title>
                <Card.Text>
                  "popular dish made by coating chicken pieces with a seasoned batter or breading and then deep-frying or pan-frying them until they are golden brown and crispy."  
                </Card.Text>
            </Card.Body>
             </Card>
            
           
           
          </div>
        </Carousel.Item>

        
      </Carousel>
      </div>
  );
}

export default DishesCarousel;