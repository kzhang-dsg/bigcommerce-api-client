import type { order_Shared } from './order_Shared';
import type { orderCatalogProduct_Post } from './orderCatalogProduct_Post';
import type { orderConsignment_Post } from './orderConsignment_Post';
import type { orderCustomProduct_Post } from './orderCustomProduct_Post';
import type { shippingAddress_Base } from './shippingAddress_Base';
/**
 * Products and Billing address only required for POST operation.
 */
export type order_Post = ({
    products?: Array<(orderCatalogProduct_Post | orderCustomProduct_Post)>;
    shipping_addresses?: Array<shippingAddress_Base>;
    consignments?: orderConsignment_Post;
} & order_Shared);
