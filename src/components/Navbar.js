import './styling/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">💖 Muyal & Kuku 💖</span>
      </div>
      <div className="nav-right">
        <a href="#gallery">Photos</a>
        <a href="#timeline">Timeline</a>
        <a href="#journal">Journal</a>
        <a href="#funny">Funny Pics</a>
      </div>
    </nav>
  );
}

export { Navbar };