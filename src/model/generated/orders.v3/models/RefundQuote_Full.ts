/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdjustmentAmount } from './AdjustmentAmount';
import type { Amount } from './Amount';
import type { RefundMethod } from './RefundMethod';

export type RefundQuote_Full = {
    total_refund_amount?: Amount;
    total_refund_tax_amount?: number;
    /**
     * Indicates rounding value to bring `refund_total` to an amount refundable via payment providers (in this case to 2 decimal places).
     */
    rounding?: number;
    adjustment?: AdjustmentAmount;
    /**
     * Indicate if `total_refund_amount` includes tax amount.
     */
    tax_inclusive?: boolean;
    /**
     * An array of available refund methods.
     *
     * Note that `refund_methods` is an array of refund methods, with each refund method being an array of payment options.
     *
     * For example, if the order was placed by a combination of store credit and bank deposit the refund methods would be:
     * ```json
     * {
         * "refund_methods": [
             * [
                 * {
                     * "provider_id": "storecredit",
                     * "provider_description": "Store Credit",
                     * "amount": 119.35,
                     * "offline": false,
                     * "offline_provider": false,
                     * "offline_reason": ""
                     * }
                     * ],
                     * [
                         * {
                             * "provider_id": "custom",
                             * "provider_description": "Custom",
                             * "amount": 119.35,
                             * "offline": true,
                             * "offline_provider": true,
                             * "offline_reason": "This is an offline payment provider."
                             * }
                             * ],
                             * [
                                 * {
                                     * "provider_id": "bankdeposit",
                                     * "provider_description": "Bank Deposit",
                                     * "amount": 80.35,
                                     * "offline": true,
                                     * "offline_provider": true,
                                     * "offline_reason": "This is an offline payment provider."
                                     * },
                                     * {
                                         * "provider_id": "storecredit",
                                         * "provider_description": "Store Credit",
                                         * "amount": 39,
                                         * "offline": false,
                                         * "offline_provider": false,
                                         * "offline_reason": ""
                                         * }
                                         * ]
                                         * ]
                                         * }
                                         * ```
                                         *
                                         * In this case there are three refund methods available to the merchant:
                                         * 1. Refund up to the entire order amount to store credit.
                                         * 2. Mark an amount up to the full order amount as refunded externally, through a provider or means not represented directly in BC ("custom").
                                         * 3. Refund the amount paid by store credit to store credit, and the amount paid by bank deposit via a manual refund, which will be recorded as being refunded against the bank deposit.
                                         *
                                         */
                                        refund_methods?: Array<RefundMethod>;
                                    };

