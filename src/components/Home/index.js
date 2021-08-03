import { Link } from "react-router-dom";

import "./styles.scss";

export function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__centerpiece">
          <Link to={"/music"}>
            <div className="Home__image Home__image--1">
              <img src="https://f4.bcbits.com/img/a0642444381_16.jpg" alt="music" />
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-text">Music</div>
              </div>
            </div>
          </Link>
          <Link to={"/about"}>
            <div className="Home__image Home__image--2">
              <picture>
                <img src={"https://res.cloudinary.com/dtxbzcy7f/image/upload/v1627956234/personal-site/000017960026-26_bbaaro.jpg"} alt="me" />
              </picture>
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-text">About</div>
              </div>
            </div>
          </Link>
          <Link to={"/photography"}>
            <div className="Home__image Home__image--3">
              <img src="https://res.cloudinary.com/dtxbzcy7f/image/upload/v1627956431/personal-site/000039-68_pn2jdm.jpg" alt="photography" />
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-text">Photography</div>
              </div>
            </div>
          </Link>
          <div className="Home__clear"></div>
        </div>
      </div>
    </div>
  )
}
