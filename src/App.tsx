import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import demoEnv from './core/environment/demo';


import { BeerDescriptionPage } from './pages/beerDescriptionPage';
import { DistributorPage } from './pages/distributorPage';

import './App.scss';


function App() {

  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/beer/:id">
            <BeerDescriptionPage />
          </Route>
          <Route exact path="/distributor">
            <DistributorPage distributor={demoEnv.distributor} inventory={demoEnv.inventory}/>
          </Route>
          <Redirect path="*" to="/distributor"></Redirect>
        </Switch>
      </main>
    </Router >
  );
}

export default App;
