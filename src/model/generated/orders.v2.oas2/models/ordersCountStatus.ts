/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderStatus_Base } from './orderStatus_Base';

export type ordersCountStatus = (orderStatus_Base & {
    /**
     * Number of orders that exist with this status.
     */
    count?: number;
    /**
     * The sort order of the order status from the Control Panel.
     */
    sort_order?: number;
});

