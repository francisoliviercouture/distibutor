import React, { useState } from 'react';
import { BeerListItem } from '../../core/models/beer-list-item';

import ambigue from '../../assets/demo/ambigue.png';
import { CartContext } from '../../core/services/cartService';
import { List, Button, Avatar, Divider, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

import './index.scss';

const { Option, OptGroup } = Select;


interface AppListItemProps {
    item: Array<BeerListItem>;
}

export function AppListItem(props: AppListItemProps) {

    const [valuee, setValuee] = useState<any>(null);
    const [hasValueSelected, setHasValueSelected] = useState<boolean>(false);

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
                            <div className="item-title">
                                <img src={ambigue} />
                                <div className="desc" onClick={() => onItemClickAction(item)}>
                                    <div style={{fontSize: 18}}>
                                        <span>{item.name}</span>
                                        <Divider type="vertical"></Divider>
                                        <span style={{fontSize: 15}}><b>{item.type}</b></span>
                                    </div>
                                    <div style={{fontSize: 13}}>
                                        <span>{item.ibu.toPrecision(2)} <b>IBU</b></span>
                                        <Divider type="vertical"></Divider>
                                        <span>{item.alcoolPercentage.toPrecision(2)}% </span>
                                    </div>
                                </div>
                            </div>

                            <div className="item-options">
                                <Select style={{ width: 120 }} size="small" value={valuee} onChange={(value) => {
                                    setValuee(value);
                                }}>
                                    <OptGroup label="Bottles">
                                        <Option value="jack">1 x 473 ml</Option>
                                        <Option value="lucy">6 x 473 ml</Option>
                                    </OptGroup>
                                    <OptGroup label="Cans">
                                        <Option value="Yiminghe">6 x 500 ml</Option>
                                    </OptGroup>
                                </Select>
                                <div className="item-option-button-container">
                                    <Button className="item-option-button" type="ghost" shape="round" size="small" icon={<PlusOutlined></PlusOutlined>} disabled={!valuee} onClick={() => {
                                        setValuee(null);
                                    }}>Add</Button>
                                </div>

                            </div>
                        </>
                    </List.Item>}>
            </List>
        )
        }
        </CartContext.Consumer >
    );
}