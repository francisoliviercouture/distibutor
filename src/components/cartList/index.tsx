import React from 'react';
import { List } from 'antd';

import CartListItem from '../cartListItem';

interface ICartListProps {
    dataSource: any
}

export function CartList(props: ICartListProps) {
    const { dataSource } = props;

    return (
        <List
            size="large"
            bordered
            dataSource={dataSource}
            renderItem={item => <CartListItem item={item} />}>
        </List>
    );
}

export default CartList;