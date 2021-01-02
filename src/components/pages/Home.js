import { Link } from "react-router-dom";

import "stylesheets/Home.scss";

function Home() {
  return (
    <div className="Home">
      Hi, I’m Liam. I like to <a href="https://github.com/lozog" rel="noopener noreferrer">build stuff</a> and <Link to="/music">write songs</Link>. I also like <a href="https://www.instagram.com/l__ozog/" rel="noopener noreferrer">taking photos on film</a> and I listen to <a href="https://www.last.fm/user/Tom_Swift" rel="noopener noreferrer">a lot</a> of music.
    </div>
  );
}

export default Home;
