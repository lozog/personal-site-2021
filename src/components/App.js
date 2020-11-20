import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "components/Header";
import "stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="page-wrapper">
          <nav className="nav-sidebar">
            <Link to="/music">Music</Link>
          </nav>
          <div className="page-content">
            <Switch>
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

function Music() {
  return <h2>Music page under construction</h2>;
}

export default App;
