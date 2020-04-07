import React from 'react';
import { List } from "antd";
import { useHistory } from "react-router-dom";

import BeerListItem from '../beerListItem';

interface BeerListItemProps {
    arrayBeers: Array<any>;
}

export function BeerList(props: BeerListItemProps) {
    let history = useHistory();

    function onItemClickAction(item: any) {
        history.push(`/beer/${item.id}`);
    }

    return (
        <List
            size="large"
            bordered
            dataSource={props.arrayBeers}
            renderItem={item => <BeerListItem beerItem={item} onClickBeerItem={onItemClickAction}/>}>
        </List>
    );
}

export default BeerList;