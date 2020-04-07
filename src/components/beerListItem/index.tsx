import React, { useState } from 'react';

import { List, Divider, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ambigue from '../../assets/demo/ambigue.png';

import './index.scss';
import { useStores } from '../../core/hooks/useStores';

const { Option, OptGroup } = Select;

interface BeerListItemProps {
    beerItem: any;
    onClickBeerItem: (beerItem: any) => void;
}

export function BeerListItem(props: BeerListItemProps) {
    const { beerItem, onClickBeerItem } = props;
    const { cartStore } = useStores();

    const [selectedOption, setSelectedOption] = useState<number>();

    function addOptionToCart() {
        cartStore.addItem(beerItem);
        setSelectedOption(undefined);
    }

    return (
        <List.Item className="beer-list-item">
            <>
                <div className="beer-list-item__header">
                    <img src={ambigue} alt=""/>
                    <div className="beer-list-item__header__desc" onClick={() => onClickBeerItem(beerItem)}>
                        <div style={{ fontSize: 18 }}>
                            <span>{beerItem.name}</span>
                            <Divider type="vertical"></Divider>
                            <span style={{ fontSize: 15 }}><b>{beerItem.type}</b></span>
                        </div>
                        <div style={{ fontSize: 13 }}>
                            <span>{beerItem.ibu.toPrecision(2)} <b>IBU</b></span>
                            <Divider type="vertical"></Divider>
                            <span>{beerItem.alcoolPercentage.toPrecision(2)}% </span>
                        </div>
                    </div>
                </div>

                <div className="beer-list-item__options">
                    <Select style={{ width: 120 }}
                        size="small"
                        value={selectedOption}
                        onChange={(value) => setSelectedOption(value)}
                    >
                        <OptGroup label="Bottles">
                            <Option value="1">1 x 473 ml</Option>
                            <Option value="2">6 x 473 ml</Option>
                        </OptGroup>
                        <OptGroup label="Cans">
                            <Option value="3">6 x 500 ml</Option>
                        </OptGroup>
                    </Select>
                    <div className="beer-list-item__options__button">
                        <Button type="ghost"
                            shape="round"
                            size="small"
                            icon={<PlusOutlined></PlusOutlined>}
                            disabled={!selectedOption}
                            onClick={() => addOptionToCart()}>Add
                        </Button>
                    </div>
                </div>
            </>
        </List.Item>
    );
}

export default BeerListItem;