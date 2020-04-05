import React, { useState, useEffect } from 'react';
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
  Link,
  Redirect
} from "react-router-dom";

import { Button, Drawer, Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'

function App() {
  const demo = new Demo();
  const [countCart, setCountCart] = useState<number>(0);
  const [items] = useState<Array<ListItem<BeerListItem>>>(demo.inventory);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'test';
  }, []);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <Router>
      <CartContext.Provider value={{ cartService, addToCart: () => setCountCart(cartService.count) }}>
        <main className="App">
          <Switch>
            <Route exact path="/distributor">
              <div className="app-header">
                <div className="app-header--title">
                  <h1>Distributor Name</h1>
                  <p>Delivery area: Québec, <b>Québec</b></p>
                </div>
                <div className="app-header--cart">
                  <Button type="primary" shape="round" size="large" icon={<ShoppingCartOutlined />} onClick={() => setVisible(true)}>Cart ({countCart})</Button>
                </div>
              </div>
              <div className="app-content">
                {items && items.map((item, idx) => <AppListItem key={idx} item={item} />)}
              </div>
              <Drawer
                title="Your cart"
                placement="right"
                onClose={() => setVisible(false)}
                visible={visible}
              >
                {cartService.cartItems && cartService.cartItems.map((cartItem, idx) => (<p>{cartItem.ibu}</p>))}
              </Drawer>
            </Route>
            <Redirect path="*" to="/distributor"></Redirect>
          </Switch>
        </main>
      </CartContext.Provider>
    </Router >
  );
}

export default App;
