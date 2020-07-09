import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';

function App() {
  return (
      <React.Fragment>
        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route>
              <p>404</p>
            </Route>
          </Switch>
        </main>
      </React.Fragment>
  );
}

export default App;
