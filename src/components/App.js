import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import 'react-image-lightbox/style.css';

import Footer from "components/Footer";
import Header from "components/Header";
import Gallery from "components/pages/Gallery";
import HomeGallery from "components/pages/HomeGallery";
import Music from "components/pages/Music";
import Photography from "components/pages/Photography";
import "stylesheets/App.scss";

/**
 * TODO: refactor using StyledComponents
 */

function HomeTest() {
  return (
    <div className="HomeTest">
      <div className="HomeTest__outer-container">
        <div className="HomeTest__inner-container">
          <Link to={"/music"}>
            <div className="HomeTest__image-1">
              <img src="https://f4.bcbits.com/img/a0642444381_16.jpg" alt="music" />
              <div className="HomeTest__image-overlay">
                <div className="HomeTest__image-overlay-contents">Music</div>
              </div>
            </div>
          </Link>
          <div className="HomeTest__image-2">
            <img src={"/img/000017960026-26.jpg"} alt="me" />
          </div>
          <Link to={"/photography"}>
            <div className="HomeTest__image-3">
              <img src="/img/buenos-aires-2020/000008-3.jpg" alt="photography" />
              <div className="HomeTest__image-overlay">
                <div className="HomeTest__image-overlay-contents">Photography</div>
              </div>
            </div>
          </Link>
          <div className="HomeTest__clear"></div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <HomeTest />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/photography" exact={true}>
            <Photography />
          </Route>
          <Route path="/photography/:galleryId">
            <Gallery />
          </Route>
          <Route component={HomeTest} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
