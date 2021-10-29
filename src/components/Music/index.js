import { Overlay } from "components/Overlay";

import "./styles.scss";

const LIFESAVER = {
  title: "Lifesaver",
  releaseDate: "2019-06-01",
  coverUrl: "https://f4.bcbits.com/img/a3218558898_10.jpg",
  url: "https://liamozog.bandcamp.com/track/lifesaver"
};

const WONDER = {
  title: "Wonder",
  releaseDate: "2019-06-06",
  coverUrl: "https://f4.bcbits.com/img/a2379072161_16.jpg",
  url: "https://liamozog.bandcamp.com/track/wonder"
};

const THE_CAMERA = {
  title: "The Camera",
  releaseDate: "2019-06-28",
  coverUrl: "https://f4.bcbits.com/img/a0838550276_16.jpg",
  url: "https://liamozog.bandcamp.com/track/the-camera"
};

const SUNDOWNING = {
  title: "Sundowning",
  releaseDate: "2020-01-10",
  coverUrl: "https://f4.bcbits.com/img/a0217976419_16.jpg",
  url: "https://liamozog.bandcamp.com/track/sundowning"
};

const GIK_WYP = {
  title: "Green is Keen, What's Your Problem?",
  releaseDate: "2020-08-28",
  coverUrl: "https://f4.bcbits.com/img/a0016068732_16.jpg",
  url: "https://liamozog.bandcamp.com/album/green-is-keen-whats-your-problem"
};

const TTSA = {
  title: "Time to Start Again",
  releaseDate: "2021-01-15",
  coverUrl: "https://f4.bcbits.com/img/a0642444381_16.jpg",
  url: "https://liamozog.bandcamp.com/track/time-to-start-again"
};

const TTS = {
  title: "Through the Storm",
  releaseDate: "2021-04-23",
  coverUrl: "https://f4.bcbits.com/img/a1544255583_16.jpg",
  url: "https://liamozog.bandcamp.com/track/through-the-storm"
};

const AH = {
  title: "Already Home",
  releaseDate: "2021-07-16",
  coverUrl: "https://f4.bcbits.com/img/a2678739858_10.jpg",
  url: "https://liamozog.bandcamp.com/track/already-home"
};

const SD = {
  title: "Stone Days",
  releaseDate: "2021-10-29",
  coverUrl: "https://f4.bcbits.com/img/a2463116461_10.jpg",
  url: "https://liamozog.bandcamp.com/track/stone-days"
};

const RELEASES = [
  LIFESAVER,
  WONDER,
  THE_CAMERA,
  SUNDOWNING,
  GIK_WYP,
  TTSA,
  TTS,
  AH,
  SD,
].reverse();

export function Music() {
  return (
    <div className="Music">
      <div className="Music__header">
      </div>
      <div className="Music__releases-grid">
        {
          RELEASES.map((releaseInfo) => (
            <a href={releaseInfo.url} target="_blank" rel="noopener noreferrer" key={releaseInfo.title}>
              <Overlay>
                <img src={releaseInfo.coverUrl} alt={releaseInfo.title} className="Music__cover-art" />
              </Overlay>
              <div className="Music__release-title">{releaseInfo.title}</div>
            </a>
          ))
        }
      </div>
    </div>
  );
}
