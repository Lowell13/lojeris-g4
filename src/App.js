import React from 'react';
import './App.css';
import Nav from "./components/Pages/Nav/Nav";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
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
