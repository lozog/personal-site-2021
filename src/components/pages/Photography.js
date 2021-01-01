import "stylesheets/Photography.scss";

/**
 * TODO:
 * add hover state to gallery containers
 * set up gallery sub-page
 */

const GALLERIES = [
  {
    title: "Test 1",
    coverFilename: "000085170001-1.jpg"
  },
  {
    title: "Test 2",
    coverFilename: "000085170002-2.jpg"
  },
  {
    title: "Test 3",
    coverFilename: "000085170003-3.jpg"
  },
  {
    title: "Test 4",
    coverFilename: "000085170004-4.jpg"
  }
];

function Photography() {
  return (
    <div className="Photography">
      <h1>Photography</h1>
      <div>Photography page under construction</div>
      <div className="Photography__galleries-grid">
        {
          GALLERIES.map((galleryInfo) => (
            <div className="Photography__gallery-container" key={galleryInfo.title}>
              <img src={`/img/${galleryInfo.coverFilename}`} alt={galleryInfo.title} className="Photography__gallery-cover" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Photography;
