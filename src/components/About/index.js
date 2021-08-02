import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export function About() {

  return (
    <div className="About">
      <div className="About__details">
        Hi, I’m Liam. I like to <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">build stuff</a> and <Link to="/music">write songs</Link>. I also like <a href="https://www.instagram.com/l__ozog/" target="_blank" rel="noopener noreferrer">taking photos (on film)</a> and I listen to <a href="https://www.last.fm/user/Tom_Swift" target="_blank" rel="noopener noreferrer">a lot</a> of music.
      </div>
      <div className="About__photo">
        <picture>
          <source type="image/avif" srcSet={"https://www.dropbox.com/s/sg5mf9rnrjaiw9y/000017960026-26.avif?raw=1"} />
          <img src={"https://www.dropbox.com/s/hrqqsqh19sj615w/000017960026-26.jpg?raw=1"} alt="me" />
        </picture>
      </div>
    </div>
  );
}
