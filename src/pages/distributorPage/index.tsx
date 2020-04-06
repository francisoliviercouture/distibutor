import React, { useState } from 'react';
import { Button, Badge, Drawer } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { AppListItem } from '../../components/app-list-item';
import { cartService } from '../../core/services/cartService';
import { BeerListItem } from '../../core/models/beer-list-item';
import { Demo } from '../../core/environment/demo';
import Search from 'antd/lib/input/Search';

export function DistributorPage() {

    const demo = new Demo();
    const [countCart, setCountCart] = useState<number>(0);
    const [items] = useState<Array<BeerListItem>>(demo.inventory);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
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
        </>
    );
}

export default DistributorPage;