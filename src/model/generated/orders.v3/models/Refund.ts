/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';
import type { RefundItem } from './RefundItem';
import type { RefundPayment } from './RefundPayment';

export type Refund = {
    /**
     * Refund resource ID
     */
    readonly id?: number;
    /**
     * Reference to order id
     */
    order_id?: number;
    /**
     * Reference to the user's id who create this refund. This is automatically populated by BigCommerce.
     */
    readonly user_id?: number;
    /**
     * Timestamp of when this refund was created
     */
    readonly created?: string;
    /**
     * Reason for refund
     */
    reason?: string;
    total_amount?: Amount;
    /**
     * Total tax amount refunded back to the shopper. Note: `order_level_amount` does not affect tax liability. This can be a negative amount indicating we have collected tax by refunding less to the customer.
     */
    total_tax?: number;
    /**
     * Whether refund amount and tax are provided explicitly by merchant override
     */
    uses_merchant_override_values?: boolean;
    /**
     * Array of items refunded
     */
    items?: Array<RefundItem>;
    /**
     * An array of refund payments made to payment providers
     */
    payments?: Array<RefundPayment>;
};

