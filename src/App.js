import React from 'react';
import './App.css';
import Nav from "./components/Pages/Nav/Nav";
import { Switch, Route } from "react-router-dom"
import Home from "./components/Pages/Home";
import List from "./components/Pages/List";
import Post from "./components/Pages/Post";
import Footer from "./components/Pages/Footer/Footer";

function App() {
  return (
      <React.Fragment>
          <main class="container">
          <Nav />
              <Switch>
                  <Route path={'/'} exact component={Home} />
                  <Route path={'/list'} exact component={List} />
                  <Route path={'/post'} exact component={Post} />
              </Switch>
          </main>
          <Footer />
      </React.Fragment>
  );
}

export default App;
