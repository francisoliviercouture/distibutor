import React, { useState } from 'react';
import { cartService, CartContext } from './core/services/cartService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { BeerDescriptionPage } from './pages/beerDescriptionPage';
import { DistributorPage } from './pages/distributorPage';

import './App.scss';


function App() {


  return (
    <Router>
      <CartContext.Provider value={{ cartService, addToCart: undefined }}>
        <main className="App">
          <Switch>
            <Route path="/beer/:id">
              <BeerDescriptionPage />
            </Route>
            <Route exact path="/distributor">
              <DistributorPage></DistributorPage>
            </Route>
            <Redirect path="*" to="/distributor"></Redirect>
          </Switch>
        </main>
      </CartContext.Provider>
    </Router >
  );
}

export default App;
