import React from 'react';
import { BeerListItem } from '../../core/models/beer-list-item';

import ambigue from '../../assets/demo/ambigue.png';
import { CartContext } from '../../core/services/cartService';
import { List, Button, Avatar, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';


interface AppListItemProps {
    item: Array<BeerListItem>;
}

export function AppListItem(props: AppListItemProps) {

    let history = useHistory();

    function onItemClickAction(item: BeerListItem) {
        history.push(`/beer/${item.id}`);
    }

    return (
        <CartContext.Consumer>{({ cartService, addToCart }) => (
            <List
                size="large"
                bordered
                dataSource={props.item}
                renderItem={item =>
                    <List.Item className="test">
                        <>
                            <div style={{ display: 'flex' }}>
                                <Avatar size="large" shape="square" src={ambigue} />
                                <div className="desc" onClick={() => onItemClickAction(item)}>
                                    <span>{item.name}</span>
                                    <Divider type="vertical"></Divider>
                                    <span><b>{item.type}</b></span>
                                    <Divider type="vertical"></Divider>
                                    <span>{item.ibu.toPrecision(2)} <b>IBU</b></span>
                                    <Divider type="vertical"></Divider>
                                    <span>{item.alcoolPercentage.toPrecision(2)}% </span>
                                </div>
                            </div>
                            <div>
                                <Button type="ghost" shape="round" size="small" icon={<PlusOutlined></PlusOutlined>} onClick={() => {
                                    cartService.addItem(item);
                                    return addToCart();
                                }}>1</Button>
                                <Button type="ghost" shape="round" size="small" icon={<PlusOutlined></PlusOutlined>}>6</Button>
                                <Button type="ghost" shape="round" size="small" icon={<PlusOutlined></PlusOutlined>}>24</Button>
                            </div>
                        </>
                    </List.Item>}>
            </List>
        )
        }
        </CartContext.Consumer >
    );
}