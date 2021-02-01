import React, { useState } from "react";
import { Link } from "react-router-dom";

import "stylesheets/About.scss";

function About() {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const inputNameRef = React.createRef();
  const inputEmailRef = React.createRef();
  const inputMessageRef = React.createRef();

  const handleSubmit = event => {
    if (!inputNameRef.current.value ||
      !inputEmailRef.current.value ||
      !inputMessageRef.current.value) {
      setFormErrorMessage("Please complete the form.")
      event.preventDefault()
      return;
    }

    setFormErrorMessage("")
  }

  return (
    <div className="About">
      Hi, I’m Liam. I like to <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">build stuff</a> and <Link to="/music">write songs</Link>. I also like <a href="https://www.instagram.com/l__ozog/" target="_blank" rel="noopener noreferrer">taking photos on film</a> and I listen to <a href="https://www.last.fm/user/Tom_Swift" target="_blank" rel="noopener noreferrer">a lot</a> of music.
      <div className="About__contact">
        <h3>Contact me:</h3>
        <form name="contact" method="post" onSubmit={handleSubmit}>
          <div className="About__contact-input">
            <label for="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              ref={inputNameRef}
            />
          </div>
          <div className="About__contact-input">
            <label for="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              ref={inputEmailRef}
            />
          </div>
          <div className="About__contact-input">
            <label for="message">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              ref={inputMessageRef}
            ></textarea>
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <button type="submit" className = "About__contact-button">Submit</button>
        </form>
        <div className="About__contact-error">{formErrorMessage}</div>
      </div>

    </div>
  );
}

export default About;
