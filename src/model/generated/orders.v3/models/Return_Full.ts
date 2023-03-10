/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReturnItem } from './ReturnItem';
import type { Status_Full } from './Status_Full';

/**
 * A view of a return
 */
export type Return_Full = {
    items?: Array<ReturnItem>;
    /**
     * The total price of the items being returned
     */
    total?: string;
    /**
     * The transactional currency of the return and the associated order
     */
    currency?: string;
    customer?: {
        id?: number;
        email?: string;
    };
    /**
     * A comment provided to the merchant for review
     */
    comment?: string;
    status?: Status_Full;
    date_modified?: string;
};

