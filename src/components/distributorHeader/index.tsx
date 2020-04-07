import React from 'react';

import { useObserver } from 'mobx-react-lite';

import { Badge, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { DistributorModel } from '../../core/models/distributor-model';

import './index.scss';

import { useStores } from '../../core/hooks/useStores';

interface DistributorHeaderProps {
    distributor: DistributorModel;
    onOpenDrawerAction: () => void;
}

export function DistributorHeader(props: DistributorHeaderProps) {
    const { distributor, onOpenDrawerAction } = props;
    const { cartStore } = useStores();
    
    return useObserver(() =>
        <div className="distributor-header">
            <div className="distributor-header__title">
                <h1>{distributor.name}</h1>
                <p>Delivery area: Québec, <b>Québec</b></p>
            </div>
            <div className="distributor-header__cart">
                <Badge count={cartStore.count}>
                    <Button type="primary" shape="round" size="large" icon={<ShoppingCartOutlined />} onClick={onOpenDrawerAction}>Cart</Button>
                </Badge>
            </div>
        </div>
    );
}

export default DistributorHeader;