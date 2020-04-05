import React, { useState } from 'react';
import './App.scss';
import { ListItem } from './core/models/list-item';
import { Demo } from './core/environment/demo';
import { BeerListItem } from './core/models/beer-list-item';
import { AppListItem } from './components/app-list-item';
import { cartService, CartContext } from './core/services/cartService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const demo = new Demo();
  const [countCart, setCountCart] = useState<number>(0);
  const [items] = useState<Array<ListItem<BeerListItem>>>(demo.inventory);

  return (
    <Router>
      <CartContext.Provider value={{ cartService, addToCart: () => setCountCart(cartService.count) }}>
        <main className="App">
          <Switch>
            <Route path="/cart">
              {cartService.cartItems && cartService.cartItems.map((cartItem, idx) => (<p>{cartItem.ibu}</p>))}
            </Route>
            <Route exact path="/distributor">
              <div className="app-header">
                <div className="app-header--title">
                  <h1>Distributor Name</h1>
                  <p>Delivery area: Québec, <b>Québec</b></p>
                </div>
                <div className="app-header--cart">
                  <Link to="/cart"><button>Cart ({countCart})</button></Link>
                </div>
              </div>
              <div className="app-content">
                {items && items.map((item, idx) => <AppListItem key={idx} item={item} />)}
              </div>
            </Route>
          </Switch>
        </main>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
