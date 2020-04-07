import React from 'react';

import { Drawer } from 'antd';

import CartList from '../cartList';
import CartDrawerFooter from '../cartDrawerFooter';
import { useStores } from '../../core/hooks/useStores';
import { useObserver } from 'mobx-react-lite';

interface ICartDrawerProps {
    isOpened: boolean;
    onCloseAction: () => void;
}

export function CartDrawer(props: ICartDrawerProps) {
    const { isOpened, onCloseAction } = props;
    const { cartStore } = useStores();

    return useObserver(() =>
        <Drawer
            title="Your cart"
            placement="right"
            footer={<CartDrawerFooter onGoToPaymentAction={() => console.log('payment')} />}
            onClose={onCloseAction}
            visible={isOpened}
        >
            <CartList dataSource={cartStore.items}></CartList>
        </Drawer>
    );
}

export default CartDrawer;