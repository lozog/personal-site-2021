import { useParams } from "react-router-dom";
import { GALLERIES } from "data/galleries";
import "stylesheets/Gallery.scss";

function Gallery() {
  const { galleryId } = useParams();
  const gallery = GALLERIES[galleryId];

  return (
    <div className="Gallery">
      <h1>{gallery.title}</h1>
      <a href="/photography">&lt; Back</a>
      <div className="Gallery__galleries-grid">
        {
          gallery.images.map((image) => (
            <div className="Gallery__gallery-container" key={image.filename}>
              <img src={`/img/thumbs/${image.thumbnail}`} alt={image.filename} className="Gallery__gallery-cover" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Gallery;
