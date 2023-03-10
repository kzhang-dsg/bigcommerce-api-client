/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ordersCountStatus } from './ordersCountStatus';

export type ordersCount_Full = {
    statuses?: Array<ordersCountStatus>;
    /**
     * Total number of orders in the store.
     */
    count?: number;
};

