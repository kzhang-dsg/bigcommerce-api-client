/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ItemsRefund } from './ItemsRefund';
import type { MerchantOverride } from './MerchantOverride';
import type { PaymentRequest } from './PaymentRequest';

/**
 * Request body for refund requests.
 */
export type RefundRequest_Post = {
    items: Array<ItemsRefund>;
    /**
     * Reason for refund
     */
    reason?: string;
    payments: Array<PaymentRequest>;
    merchant_calculated_override?: MerchantOverride;
};

