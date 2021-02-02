import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import Overlay from "components/Overlay";
import { GALLERIES } from "data/galleries";
import "./styles.scss";

export default function Gallery() {
  const { galleryId } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const gallery = GALLERIES[galleryId];

  if (!gallery) {
    return <div>Gallery not found</div>
  }

  const images = gallery.images.map(image => (
    image.filename
  ))

  return (
    <div className="Gallery">
      <div className="Gallery__header">
        <Link to="/photography">&lt; Back</Link>
      </div>
      <div className="Gallery__galleries-grid">
        {
          gallery.images.map((image, i) => (
            <div
            className="Gallery__image-container"
              key={image.filename}
              onClick={() => {
                setImageIndex(i)
                setIsOpen(true)
              }}
            >
              <Overlay>
                <img src={`/img/${galleryId}/${image.filename}`} alt={image.filename} className="Gallery__image" />
              </Overlay>
            </div>
          ))
        }
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={`/img/${galleryId}/${images[imageIndex]}`}
          nextSrc={`/img/${galleryId}/${images[(imageIndex + 1) % images.length]}`}
          prevSrc={`/img/${galleryId}/${images[(imageIndex + images.length - 1) % images.length]}`}
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
