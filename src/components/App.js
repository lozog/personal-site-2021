import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from "components/Footer";
import Header from "components/Header";
import Home from "components/pages/Home";
import Music from "components/pages/Music";
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
          </nav>
          <div className="page-content">
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/music">
                <Music />
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
