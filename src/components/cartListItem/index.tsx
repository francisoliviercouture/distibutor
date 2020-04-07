import React from 'react';
import { List } from 'antd';
import { useStores } from '../../core/hooks/useStores';

interface ICartListItemProps {
    item: any;
}

export function CartListItem(props: ICartListItemProps) {
    const { item } = props;
    const { cartStore } = useStores();

    return (
        <List.Item className="beer-list-item" onClick={() => cartStore.removeItem()}>
            {item.name}
        </List.Item>
    );
}

export default CartListItem;    