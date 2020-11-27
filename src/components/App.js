import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "components/Header";
import Home from "components/pages/Home";
import Music from "components/pages/Music";
import "stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="page-wrapper">
          <nav className="nav-sidebar">
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
    </div>
  );
}

export default App;
