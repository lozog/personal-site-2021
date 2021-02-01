import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { Spotify, Github, Instagram, Bandcamp } from '@icons-pack/react-simple-icons';
import 'react-image-lightbox/style.css';

import Footer from "components/Footer";
import Header from "components/Header";
import Gallery from "components/pages/Gallery";
import Home from "components/pages/Home";
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
      <div className="HomeTest__header">
        <span className="HomeTest__header-name">Liam Ozog</span>
        <div className="App__sidebar-icon-container">
          <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">
            <Github size={24} className="App__sidebar-icon" />
          </a>
          <a href="https://open.spotify.com/artist/4Ap3RmZW14MSTCjR8X6aru?si=wLfh_FeeTIiduzR95aGVrQ" target="_blank" rel="noopener noreferrer">
            <Spotify size={24} className="App__sidebar-icon" />
          </a>
          <a href="https://www.instagram.com/l__ozog/" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="App__sidebar-icon" />
          </a>
          <a href="https://tom-swift.bandcamp.com/" target="_blank" rel="noopener noreferrer">
            <Bandcamp size={24} className="App__sidebar-icon" />
          </a>
        </div>
      </div>
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

function NotFound() {
  return <div>Page not found</div>
}

function App() {
  return (
    <Router>
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
        <Route component={NotFound} />
      </Switch>
    </Router>
  );

  // return (
  //   <div className="App">
  //     <Header />
  //     <Router>
  //       <div className="page-wrapper">
  //         {/* <div className="App__sidebar">
  //           <nav>
  //             <NavLink to="/" exact={true} activeClassName="sidebar-active_link">Home</NavLink>
  //             <NavLink to="/music" activeClassName="sidebar-active_link">Music</NavLink>
  //             <NavLink to="/photography" activeClassName="sidebar-active_link">Photography</NavLink>
  //           </nav>
  //           <div className="App__sidebar-icon-container">
  //             <a href="https://github.com/lozog" target="_blank" rel="noopener noreferrer">
  //               <Github size={24} className="App__sidebar-icon" />
  //             </a>
  //             <a href="https://open.spotify.com/artist/4Ap3RmZW14MSTCjR8X6aru?si=wLfh_FeeTIiduzR95aGVrQ" target="_blank" rel="noopener noreferrer">
  //               <Spotify size={24} className="App__sidebar-icon" />
  //             </a>
  //             <a href="https://www.instagram.com/l__ozog/" target="_blank" rel="noopener noreferrer">
  //               <Instagram size={24} className="App__sidebar-icon" />
  //             </a>
  //             <a href="https://tom-swift.bandcamp.com/" target="_blank" rel="noopener noreferrer">
  //               <Bandcamp size={24} className="App__sidebar-icon" />
  //             </a>
  //           </div>
  //         </div> */}
  //         <div className="page-content">
  //           <Switch>
  //             <Route path="/" exact={true}>
  //               <HomeGallery />
  //             </Route>
  //             <Route path="/music">
  //               <Music />
  //             </Route>
  //             <Route path="/photography" exact={true}>
  //               <Photography />
  //             </Route>
  //             <Route path="/photography/:galleryId">
  //               <Gallery />
  //             </Route>
  //             <Route component={NotFound} />
  //           </Switch>
  //         </div>
  //       </div>
  //     </Router>
  //     <Footer />
  //   </div>
  // );
}

export default App;
