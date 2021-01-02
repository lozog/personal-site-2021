import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import 'react-image-lightbox/style.css';

import Footer from "components/Footer";
import Header from "components/Header";
import Gallery from "components/pages/Gallery";
import Home from "components/pages/Home";
import Music from "components/pages/Music";
import Photography from "components/pages/Photography";
import "stylesheets/App.scss";

/**
 * TODO: refactor using StyledComponents
 */

 function NotFound() {
   return <div>Page not found</div>
 }

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="page-wrapper">
          <nav className="App__sidebar">
            <NavLink to="/" exact={true} activeClassName="sidebar-active_link">Home</NavLink>
            <NavLink to="/music" activeClassName="sidebar-active_link">Music</NavLink>
            <NavLink to="/photography" activeClassName="sidebar-active_link">Photography</NavLink>
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
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
