import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-image-lightbox/style.css';

import { About } from "components/About/index.js";
import { Footer } from "components/Footer/index.js";
import { Header } from "components/Header/index.js";
import { Home } from "components/Home/index.js";
import { Music } from "components/Music/index.js";
import { Photography } from "components/Photography/index.js";
import "./styles.scss";

/**
 * TODO: refactor using StyledComponents
 */

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
          <Route path="/about">
            <About />
          </Route>
          <Route component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
