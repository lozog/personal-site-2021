import { Link } from "react-router-dom";

import { GALLERIES } from "data/galleries";
import "stylesheets/Photography.scss";

/**
 * TODO:
 * add hover state to gallery containers
 * add lightbox for each image
 * add link to my Instagram
 */

function Photography() {
  return (
    <div className="Photography">
      <h1>Photography</h1>
      <div className="Photography__galleries-grid">
        {
          Object.entries(GALLERIES).map(([key, galleryInfo], i) => (
            <Link to={`/photography/${key}`}>
              <div className="Photography__gallery-container" key={galleryInfo.title}>
                <img src={`/img/${key}/thumbs/${galleryInfo.coverFilename}`} alt={galleryInfo.title} className="Photography__gallery-cover" />
                <div className="Photography__gallery-container-overlay">
                  <div className="Photography__gallery-container-overlay-contents">{galleryInfo.title}</div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Photography;
