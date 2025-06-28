import './CSS/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <h1>Stay Connected</h1>
      <p>&copy; 2023 Desi Tadka. All rights reserved.</p>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <form className="subscribe-form">
        <input type="email" placeholder="Subscribe to our newsletter" required />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
}
