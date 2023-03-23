import type { address_Full } from './address_Full';
import type { consignmentAvailableShippingOptions } from './consignmentAvailableShippingOptions';
import type { PickupOption } from './PickupOption';
/**
 * This allows us to have multiple shipping addresses. Where there is only one shipping address, this array will contain only one value, with all the items.
 */
export type consignment_Full = {
    id?: string;
    shippingAddress?: any;
    address?: address_Full;
    selectedPickupOption?: PickupOption;
    /**
     * This is available only when "include=consignments.availableShippingOptions" is present in the URL.
     */
    availableShippingOptions?: Array<consignmentAvailableShippingOptions>;
    selectedShippingOption?: {
        /**
         * Read only.
         */
        readonly description?: string;
        id?: string;
        /**
         * Specifies the type of shipping option; for example, flat rate, UPS, etc.
         */
        type?: string;
        imageUrl?: string;
        cost?: number;
        /**
         * An estimate of the arrival time.
         */
        transitTime?: string;
        /**
         * Read only. Field used for Shipping Provider API.
         */
        readonly additionalDescription?: string;
    };
    /**
     * List of consignment discounts applied through coupons.
     */
    couponDiscounts?: Array<{
        /**
         * Coupon code that applied this discount.
         */
        code?: string;
        amount?: number;
    }>;
    /**
     * List of consignment discounts applied through cart level discounts.
     */
    discounts?: Array<{
        /**
         * Discount rule ID that applied this discount.
         */
        id?: string;
    }>;
    /**
     * The shipping cost for this consignment.
     */
    shippingCost?: number;
    /**
     * The handling cost of shipping for this consignment.
     */
    handlingCost?: number;
    lineItemIds?: Array<string>;
};
