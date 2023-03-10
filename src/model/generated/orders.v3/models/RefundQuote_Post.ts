/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ItemsRefund } from './ItemsRefund';

/**
 * Request body for refund quotes.
 */
export type RefundQuote_Post = {
    /**
     * Order ID against which this refund will be created. This is optional for creating a single refund request. The order ID is included in the request path.
     */
    order_id: number;
    items: Array<ItemsRefund>;
};

