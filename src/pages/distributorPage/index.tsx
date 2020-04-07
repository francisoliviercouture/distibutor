import React, { useState } from 'react';

import Search from 'antd/lib/input/Search';

import BeerList from '../../components/beerList';
import CartDrawer from '../../components/cartDrawer';
import DistributorHeader from '../../components/distributorHeader';


export function DistributorPage(props: any) {
    const { distributor, inventory } = props;
    const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

    return (
        <>
            <DistributorHeader
                distributor={distributor}
                onOpenDrawerAction={() => setIsDrawerVisible(true)}
            />
            <div className="app-content">
                <section className="app-content__section">
                    <Search placeholder="Search for a beer" onSearch={value => console.log(value)} />
                </section>
                <section className="app-content__section">
                    <h3>Recently added</h3>
                    <BeerList arrayBeers={inventory} />
                </section>
            </div>
            <CartDrawer
                isOpened={isDrawerVisible}
                onCloseAction={() => setIsDrawerVisible(false)}
            />
        </>
    );
}

export default DistributorPage;