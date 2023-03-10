import type { order_Shared } from './order_Shared';
import type { orderCatalogProduct_Put } from './orderCatalogProduct_Put';
import type { orderCustomProduct_Put } from './orderCustomProduct_Put';
import type { shippingAddress_Base } from './shippingAddress_Base';
export type order_Put = ({
    products?: Array<(orderCatalogProduct_Put | orderCustomProduct_Put)>;
    shipping_addresses?: shippingAddress_Base;
} & order_Shared);
