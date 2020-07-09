import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Pages/Nav/Nav';
import Home from './components/Pages/Home';
import Footer from "./components/Pages/Footer/Footer";

function App() {
  return (
      <React.Fragment>
        <Nav />
        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route>
              <p>404</p>
            </Route>
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
  );
}

export default App;
