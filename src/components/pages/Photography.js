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
            <div className="Photography__gallery-container" key={galleryInfo.title}>
              <a href={`/photography/${key}`}>
                <img src={`/img/${key}/thumbs/${galleryInfo.coverFilename}`} alt={galleryInfo.title} className="Photography__gallery-cover" />
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Photography;
