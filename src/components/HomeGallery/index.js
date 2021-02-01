import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Lightbox from 'react-image-lightbox';

import { GALLERIES } from "data/galleries";
import "./styles.scss";

function HomeGallery() {
  // const { galleryId } = useParams();
  const galleryId = "buenos-aires-2020";
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const gallery = GALLERIES[galleryId];

  if (!gallery) {
    return <div>HomeGallery not found</div>
  }

  const images = gallery.images.map(image => (
    image.filename
  ))

  return (
    <div className="HomeGallery">
      {/* <div className="HomeGallery__header">
        <h1>{gallery.title}</h1>
        <Link to="/photography">&lt; Back</Link>
      </div> */}
      <div className="HomeGallery__galleries-grid">
        {
          gallery.images.map((image, i) => (
            <div
              className="HomeGallery__gallery-container"
              key={image.filename}
              onClick={() => {
                setImageIndex(i)
                setIsOpen(true)
              }}
            >
              <img src={`/img/${galleryId}/${image.filename}`} alt={image.filename} className="HomeGallery__gallery-cover" />
              <div className="HomeGallery__gallery-container-overlay" />
            </div>
          ))
        }
      </div>
      {/* {isOpen && (
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
      )} */}
    </div>
  );
}

export default HomeGallery;
