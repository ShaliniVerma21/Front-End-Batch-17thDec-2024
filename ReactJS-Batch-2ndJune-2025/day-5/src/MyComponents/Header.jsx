import './CSS/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Desi Tadka (Veg)</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <p>Experience the vibrant flavors of vegetarian Indian cuisine!</p>
    </header>
  );
}
