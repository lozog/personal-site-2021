import {Link } from "react-router-dom";

import "./styles.scss";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__outer-container">
        <div className="Home__inner-container">
          <Link to={"/music"}>
            <div className="Home__image-1">
              <img src="https://f4.bcbits.com/img/a0642444381_16.jpg" alt="music" />
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-contents">Music</div>
              </div>
            </div>
          </Link>
          <Link to={"/about"}>
            <div className="Home__image-2">
              <img src={"/img/000017960026-26.jpg"} alt="me" />
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-contents">About</div>
              </div>
            </div>
          </Link>
          <Link to={"/photography"}>
            <div className="Home__image-3">
              <img src="/img/buenos-aires-2020/000008-3.jpg" alt="photography" />
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-contents">Photography</div>
              </div>
            </div>
          </Link>
          <div className="Home__clear"></div>
        </div>
      </div>
    </div>
  )
}
