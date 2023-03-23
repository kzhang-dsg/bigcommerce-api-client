import type { billingAddress_Put } from './billingAddress_Put';
import type { order_Shared } from './order_Shared';
import type { orderCatalogProduct_Put } from './orderCatalogProduct_Put';
import type { orderConsignment_Put } from './orderConsignment_Put';
import type { orderCustomProduct_Put } from './orderCustomProduct_Put';
import type { shippingAddress_Put } from './shippingAddress_Put';
export type order_Put = (order_Shared & {
    billing_address?: billingAddress_Put;
    consignments?: orderConsignment_Put;
    /**
     * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `Cash`,`Test Payment Gateway`, etc.
     */
    payment_method?: string;
    products?: Array<(orderCatalogProduct_Put | orderCustomProduct_Put)>;
    shipping_addresses?: ({
        id?: number;
    } & shippingAddress_Put);
});
