import {Link } from "react-router-dom";

import "./styles.scss";

export default function Home() {
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
                <source type="image/avif" srcSet={"https://www.dropbox.com/s/sg5mf9rnrjaiw9y/000017960026-26.avif?raw=1"} />
                <img src={"https://www.dropbox.com/s/hrqqsqh19sj615w/000017960026-26.jpg?raw=1"} alt="me" />
              </picture>
              <div className="Home__image-overlay">
                <div className="Home__image-overlay-text">About</div>
              </div>
            </div>
          </Link>
          <Link to={"/photography"}>
            <div className="Home__image Home__image--3">
              <img src="/img/buenos-aires-2020/000039-68.jpg" alt="photography" />
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
