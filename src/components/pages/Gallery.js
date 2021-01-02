import { useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import { GALLERIES } from "data/galleries";
import "stylesheets/Gallery.scss";

function Gallery() {
  const { galleryId } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const gallery = GALLERIES[galleryId];
  const images = gallery.images.map(image => (
    image.filename
  ))

  return (
    <div className="Gallery">
      <div className="Gallery__header">
        <h1>{gallery.title}</h1>
        <a href="/photography">&lt; Back</a>
      </div>
      <div className="Gallery__galleries-grid">
        {
          gallery.images.map((image, i) => (
            <div
              className="Gallery__gallery-container"
              key={image.filename}
              onClick={() => {
                setImageIndex(i)
                setIsOpen(true)
              }}
            >
              <img src={`/img/thumbs/${image.thumbnail}`} alt={image.filename} className="Gallery__gallery-cover" />
            </div>
          ))
        }
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={`/img/${images[imageIndex]}`}
          nextSrc={`/img/${images[(imageIndex + 1) % images.length]}`}
          prevSrc={`/img/${images[(imageIndex + images.length - 1) % images.length]}`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImageIndex((imageIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % images.length)
          }
          enableZoom={false}
          animationDisabled
        />
      )}
    </div>
  );
}

export default Gallery;
