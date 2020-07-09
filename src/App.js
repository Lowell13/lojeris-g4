import React from 'react';
import './App.css';
import Nav from "./components/Pages/Nav/Nav";
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home";
import Footer from "./components/Pages/Footer/Footer";

function App() {
  return (
      <React.Fragment>
          <Nav />
          <main>
              <Switch>
                  <Route path={'/'} exact component={Home} />
              </Switch>
          </main>
          <Footer />
      </React.Fragment>
  );
}

export default App;
