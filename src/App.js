import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContext } from "react";

import About from "./pages/About";
import Home from "./pages/Home";

import Header from "./components/header/Header";
import Speakers from "./components/speakers/SpeakerList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
      </>
      <Switch>
        <Route path="/speakers">
          <Speakers />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
