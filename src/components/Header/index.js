import { Spotify, Github, Instagram, Bandcamp } from '@icons-pack/react-simple-icons';
import { Link } from "react-router-dom";

import "./styles.scss";

function Header() {
  return (
    <div className="Header">
      <span className="Header__name">
        <Link to="/">Liam Ozog</Link>
      </span>
      <div className="Header__icon-container">
        <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">
          <Github size={24} className="Header__icon" />
        </a>
        <a href="https://open.spotify.com/artist/6CPrLNVq7V7bQSltQq7qVv?si=S2g7rPSxScuYDeqAyHKWJw" target="_blank" rel="noopener noreferrer">
          <Spotify size={24} className="Header__icon" />
        </a>
        <a href="https://www.instagram.com/l__ozog/" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} className="Header__icon" />
        </a>
        <a href="https://liamozog.bandcamp.com/" target="_blank" rel="noopener noreferrer">
          <Bandcamp size={24} className="Header__icon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
