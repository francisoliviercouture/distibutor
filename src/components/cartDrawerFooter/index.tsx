import React from 'react';
import { Button } from 'antd';
import { useStores } from '../../core/hooks/useStores';

interface ICartDrawerFooterProps {
    onGoToPaymentAction: () => void;
}

export function CartDrawerFooter(props: ICartDrawerFooterProps) {
    const { onGoToPaymentAction } = props;

    const { cartStore } = useStores();

    return (
        <Button type="primary"
            onClick={onGoToPaymentAction}
            disabled={cartStore.count <= 0}
            block
        >
            Go to payment
        </Button>
    );
}

export default CartDrawerFooter;