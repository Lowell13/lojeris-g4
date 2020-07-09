import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchBuildings } from './actions/building_action';
import {BrowserRouter} from "react-router-dom";
import {fetchDistricts} from "./actions/district_action";
import {fetchCategories} from "./actions/category_action";
import {fetchFeatures} from "./actions/feature_action";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(fetchBuildings(), fetchDistricts(), fetchCategories(), fetchFeatures());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
