import type { metaEmpty_Full } from './metaEmpty_Full';
export type RefundID_Get = {
    data?: {
        /**
         * Refund ID for the returned refund.
         *
         */
        id?: number;
        /**
         * Order ID associated with the refund.
         */
        order_id?: number;
        /**
         * Reference to the user ID who created the refund. This is automatically populated by BigCommerce.
         *
         */
        user_id?: number;
        /**
         * Timestamp of when the refund was created.
         *
         */
        created?: string;
        /**
         * Reason for refund.
         *
         */
        reason?: string;
        /**
         * A non-negative 2 decimal place rounded value that represents the amount that can be refunded with the correct payment provider(s).
         *
         */
        total_amount?: number;
        /**
         * Total tax amount refunded back to the shopper. This can be a negative amount indicating we have collected tax by refunding less to the customer.
         *
         */
        total_tax?: number;
        /**
         * Whether refund amount and tax are provided explicitly by merchant override.
         *
         */
        uses_merchant_override_values?: boolean;
        payments?: Array<{
            /**
             * Reference to refund payment ID.
             *
             */
            id?: number;
            /**
             * Reference to payment provider.
             * example: storecredit
             *
             */
            provider_id?: string;
            /**
             * A non-negative two decimal place rounded value represents the amount that can be charged/refunded with payment providers.
             *
             */
            amount?: number;
            /**
             * Indicates whether the payment was offline.
             *
             */
            offline?: boolean;
            /**
             * Indicates if this payment has been declined by the payment provider.
             *
             */
            is_declined?: boolean;
            /**
             * Message indicates why the payment was declined.
             *
             */
            declined_message?: string;
        }>;
        items?: Array<{
            /**
             * Type of item that was refunded.
             *
             */
            item_type?: 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER';
            /**
             * `order_product.id` corresponding to the item_types of PRODUCT, GIFT_WRAPPING. `order_address.id` corresponding to the item_types of SHIPPING, HANDLING. `order.id` corresponding to the item_type of ORDER.
             *
             */
            item_id?: number;
            /**
             * Quantity of item refunded. Note: this will only be populated for item_type PRODUCT.
             *
             */
            quantity?: number;
            /**
             * A non-negative two decimal place rounded value that represents the amount that can be refunded with the payment provider(s).
             *
             */
            requested_amount?: string | null;
            /**
             * Reason for refunding an item.
             *
             */
            reason?: string;
        }>;
    };
    meta?: metaEmpty_Full;
};
