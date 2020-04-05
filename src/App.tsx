import React, { useState, useEffect } from 'react';
import './App.scss';
import { Demo } from './core/environment/demo';
import { BeerListItem } from './core/models/beer-list-item';
import { AppListItem } from './components/app-list-item';
import { cartService, CartContext } from './core/services/cartService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

import { Button, Drawer, Table, Divider, Layout, Badge, PageHeader, Descriptions } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons'
import Search from 'antd/lib/input/Search';
import { BeerDescriptionPage } from './pages/beerDescriptionPage';

function App() {
  const demo = new Demo();
  const [countCart, setCountCart] = useState<number>(0);
  const [items] = useState<Array<BeerListItem>>(demo.inventory);
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
            <Route path="/beer/:id">
              <BeerDescriptionPage/>
            </Route>
            <Route exact path="/distributor">
              <div className="app-header">
                <div className="app-header--title">
                  <h1>Distributor Name</h1>
                  <p>Delivery area: Québec, <b>Québec</b></p>
                </div>
                <div className="app-header--cart">
                  <Badge count={countCart}>
                    <Button type="primary" shape="round" size="large" icon={<ShoppingCartOutlined />} onClick={() => setVisible(true)}>Cart</Button>
                  </Badge>
                </div>
              </div>
              <div className="app-content">
                <section className="app-content--section">
                  <Search placeholder="Search for a beer" onSearch={value => console.log(value)} />
                </section>
                <section className="app-content--section">
                  <h3>Recently added</h3>
                  <AppListItem item={items} />
                </section>
                <section className="app-content--section">
                  <h3>All beers</h3>
                  <AppListItem item={items} />
                </section>
              </div>
              <Drawer
                title="Your cart"
                placement="right"
                onClose={() => setVisible(false)}
                visible={visible}
              >
                {cartService.cartItems && cartService.cartItems.map((cartItem, idx) =>
                  <>
                    <p>{cartItem.name}</p>
                  </>
                )}
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
