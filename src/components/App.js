import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'react-image-lightbox/style.css';

import Footer from "components/Footer";
import Header from "components/Header";
import Gallery from "components/pages/Gallery";
import Home from "components/pages/Home";
import Music from "components/pages/Music";
import Photography from "components/pages/Photography";
import "stylesheets/App.scss";

/**
 * TODO:
 * Have links highlight when on their page
 */

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="page-wrapper">
          <nav className="App__sidebar">
            <Link to="/">Home</Link>
            <Link to="/music">Music</Link>
            <Link to="/photography">Photography</Link>
          </nav>
          <div className="page-content">
            <Switch>
              <Route path="/" exact={true}>
                <Home />
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
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
