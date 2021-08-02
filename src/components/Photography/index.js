import { useState } from "react";
import Lightbox from 'react-image-lightbox';

import Overlay from "components/Overlay";
import "./styles.scss";

const gallery = {
  title: "Buenos Aires",
  coverFilename: "000008-3.jpg",
  description: "Buenos Aires 2020",
  images: [{ "filename": "000038-67.jpg" }, { "filename": "000012-7.jpg" }, { "filename": "000010-5.jpg" }, { "filename": "000016-11.jpg" }, { "filename": "000040-69.jpg" }, { "filename": "000036-65.jpg" }, { "filename": "000034-63.jpg" }, { "filename": "000011-6.jpg" }, { "filename": "000008-3.jpg" }, { "filename": "000039-68.jpg" }, { "filename": "000019-14.jpg" }, { "filename": "000035-64.jpg" }, { "filename": "000009-38.jpg" }, { "filename": "000013-8.jpg" }, { "filename": "000007-2.jpg" }, { "filename": "000042-71.jpg" }, { "filename": "000033-62.jpg" }]
};

export default function Photography() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = gallery.images.map(image => (
    image.filename
  ))

  return (
    <div className="Photography">
      <div className="Photography__galleries-grid">
        {
          gallery.images.map((image, i) => (
            <div
              className="Photography__image-container"
              key={image.filename}
              onClick={() => {
                setImageIndex(i)
                setIsOpen(true)
              }}
            >
              <Overlay>
                <img src={`/img/photography/${image.filename}`} alt={image.filename} className="Photography__image" />
              </Overlay>
            </div>
          ))
        }
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={`/img/photography/${images[imageIndex]}`}
          nextSrc={`/img/photography/${images[(imageIndex + 1) % images.length]}`}
          prevSrc={`/img/photography/${images[(imageIndex + images.length - 1) % images.length]}`}
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
