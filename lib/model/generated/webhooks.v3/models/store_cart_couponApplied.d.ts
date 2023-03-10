import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires whenever a new coupon code is applied to a cart. The webhook request body includes the ID of the coupon code.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/couponApplied",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c",
         * "couponId": 1
         * }
         * }
         * ```
         */
export type store_cart_couponApplied = webhook_callback_base;
