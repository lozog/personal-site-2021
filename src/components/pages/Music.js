import "stylesheets/Music.scss";

const LIFESAVER = {
  title: "Lifesaver",
  releaseDate: "2019-06-01",
  coverUrl: "https://f4.bcbits.com/img/a3218558898_10.jpg",
  url: "https://tom-swift.bandcamp.com/track/lifesaver"
};

const WONDER = {
  title: "Wonder",
  releaseDate: "2019-06-06",
  coverUrl: "https://f4.bcbits.com/img/a2379072161_16.jpg",
  url: "https://tom-swift.bandcamp.com/track/wonder"
};

const THE_CAMERA = {
  title: "The Camera",
  releaseDate: "2019-06-28",
  coverUrl: "https://f4.bcbits.com/img/a0838550276_16.jpg",
  url: "https://tom-swift.bandcamp.com/track/the-camera"
};

const SUNDOWNING = {
  title: "Sundowning",
  releaseDate: "2020-01-10",
  coverUrl: "https://f4.bcbits.com/img/a0217976419_16.jpg",
  url: "https://tom-swift.bandcamp.com/track/sundowning"
};

const GIK_WYP = {
  title: "Green is Keen, What's Your Problem?",
  releaseDate: "2020-08-28",
  coverUrl: "https://f4.bcbits.com/img/a0016068732_16.jpg",
  url: "https://tom-swift.bandcamp.com/album/green-is-keen-whats-your-problem"
};

const RELEASES = [
  LIFESAVER,
  WONDER,
  THE_CAMERA,
  SUNDOWNING,
  GIK_WYP,
];

function Music() {
  return (
    <div className="Music">
      <h1>Music</h1>
      <div className="Music__releases-grid">
        {
          RELEASES.map((releaseInfo) => (
            <div className="Music__release-container" key={releaseInfo.title}>
              <img src={releaseInfo.coverUrl} alt={releaseInfo.title} className="Music__cover-art" />
              <a href={releaseInfo.url}>{releaseInfo.title}</a>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Music;