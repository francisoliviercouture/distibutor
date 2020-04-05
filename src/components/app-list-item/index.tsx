import React from 'react';
import { ListItem } from '../../core/models/list-item';
import { BeerListItem } from '../../core/models/beer-list-item';

import ambigue from '../../assets/demo/ambigue.png';
import { CartContext } from '../../core/services/cartService';
import { List } from 'antd';


interface AppListItemProps {
    item: Array<ListItem<BeerListItem>>;
}

export function AppListItem(props: AppListItemProps) {
    return (
        <CartContext.Consumer>{({ cartService, addToCart }) => (
            <List
                size="large"
                bordered
                dataSource={props.item}
                renderItem={item => <List.Item>{item.name}</List.Item>}>
                </List>
        // <div className="app-content-item">
        //     <img className="app-item-img" src={ambigue} alt="" />
        //     <div className="app-item-col-wrapper">
        //         <div className="app-item-row-wrapper">
        //             <span>{props.item as ListItem<BeerListItem> && props.item.name}</span>
        //             <span><b>{props.item as ListItem<BeerListItem> && props.item.type}</b></span>
        //         </div>
        //         <div className="app-item-row-wrapper">
        //             <p>IBU {props.item as ListItem<BeerListItem> && parseInt(props.item.ibu)}</p>
        //             <p>{props.item as ListItem<BeerListItem> && props.item.alcoolPercentage} %</p>
        //         </div>
        //         <div className="app-item-row-wrapper">
        //             <div></div>
        //             <button onClick={() => {
        //                 cartService.addItem(props.item)
        //                 return addToCart();
        //             }}><i className="las la-plus"></i></button>
        //         </div>
        //     </div>
        // </div>
    )
}
        </CartContext.Consumer >
    );
}