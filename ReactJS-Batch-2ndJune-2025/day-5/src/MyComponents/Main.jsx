import './CSS/Main.css'
import { Card, Button } from 'react-bootstrap';
import Image1 from './Images/img1.png';
import Image2 from './Images/img2.png';
import Image3 from './Images/img3.png';
export default function Main() {
  return (
    <main className="main">
      <h1>Our Special Dishes</h1>
      <div className="card-container">
        <Card className="dish-card">
          <Card.Img variant="top" src={Image1} />
          <Card.Body>
            <Card.Title>Paneer Tikka</Card.Title>
            <Card.Text>
              A delicious dish made with marinated paneer and spices.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
        </Card>
        <Card className="dish-card">
          <Card.Img variant="top" src={Image2} />
          <Card.Body>
            <Card.Title>Chole Bhature</Card.Title>
            <Card.Text>
              Spicy chickpeas served with fluffy bhature.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
        </Card>
        <Card className="dish-card">
          <Card.Img variant="top" src={Image3} />
          <Card.Body>
            <Card.Title>Vegetable Biryani</Card.Title>
            <Card.Text>
              Aromatic basmati rice cooked with mixed vegetables and spices.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}
