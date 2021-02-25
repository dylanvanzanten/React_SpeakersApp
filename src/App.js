import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContext } from "react";

import ThemeContext from "./context/UseContextTest";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Speakers from "./components/speakers/SpeakerList";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  // const {themes} = useContext(ThemeContext)
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
      </div>
      <Switch>
        <Route path="/speakers">
          <Speakers />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
