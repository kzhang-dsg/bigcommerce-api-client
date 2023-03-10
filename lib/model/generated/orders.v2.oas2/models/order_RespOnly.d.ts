import type { coupons_Resource } from './coupons_Resource';
import type { formFields } from './formFields';
import type { products_Resource } from './products_Resource';
import type { shippingAddresses_Resource } from './shippingAddresses_Resource';
/**
 * Properties that are only for order response bodies.
 */
export type order_RespOnly = {
    /**
     * Read-only. The ID of the order.
     */
    id?: number;
    /**
     * A read-only value representing the last modification of the order. Do not attempt to modify or set this value in a POST or PUT request. RFC-2822
     */
    date_modified?: string;
    /**
     * A read-only value representing the date of shipment. Do not attempt to modify or set this value in a POST or PUT request. RFC-2822
     */
    date_shipped?: string;
    /**
     * The cart ID from which this order originated, if applicable. Correlates with the Cart API. This is a read-only field; do not set or modify its value in a POST or PUT request.
     */
    cart_id?: string;
    /**
     * The status will include one of the (string, options) - values defined under Order Statuses. This value is read-only. Do not attempt to modify or set this value in a POST or PUT operation.
     */
    status?: string;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    subtotal_tax?: string;
    /**
     * A read-only value. Do not attempt to modify or set this value in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    shipping_cost_tax?: string;
    /**
     * Shipping-cost tax class. A read-only value. Do not attempt to modify or set this value in a POST or PUT request. (NOTE: Value ignored if automatic tax is enabled on the store.)
     */
    shipping_cost_tax_class_id?: number;
    /**
     * A read-only value. Do not attempt to modify or set this value in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    handling_cost_tax?: string;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT request. (NOTE: Value ignored if automatic tax is enabled on the store.)
     */
    handling_cost_tax_class_id?: number;
    /**
     * A read-only value. Do not attempt to modify or set this value in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    wrapping_cost_tax?: string;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT request. (NOTE: Value ignored if automatic tax is enabled on the store.)
     */
    wrapping_cost_tax_class_id?: number;
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT request.
     */
    payment_status?: order_RespOnly.payment_status;
    /**
     * Represents the store credit that the shopper has redeemed on this individual order. This is a read-only value. Do not pass in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    store_credit_amount?: string;
    /**
     * A read-only value. Do not pass in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    gift_certificate_amount?: string;
    /**
     * The display currency ID. Depending on the currency selected, the value can be different from the transactional currency. A read-only value. Do not pass in a POST or PUT request. In v2 display currency is set to the transactional currency, 'default_currency_id'.
     */
    currency_id?: number;
    /**
     * The currency code of the display currency used to present prices to the shopper on the storefront. Depending on the currency selected, the value can be different from the transactional currency. A read-only value. Do not pass in a POST or PUT request.
     */
    currency_code?: string;
    /**
     * The exchange rate between the store’s default currency and the display currency. A read-only value. Do not pass in a POST or PUT request. For orders created using the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1). (Float, Float-As-String, Integer)
     */
    currency_exchange_rate?: string;
    /**
     * The transactional currency ID. A read-only value. Do not pass in a POST or PUT request.
     */
    default_currency_id?: number;
    /**
     * The currency code of the transactional currency the shopper pays in.
     */
    default_currency_code?: string;
    /**
     * The currency code of the store's default currency.
     */
    store_default_currency_code?: string;
    /**
     * The exchange rate between the store's default currency and the transactional currency used in the order.
     */
    store_default_to_transactional_exchange_rate?: string;
    /**
     * A read-only value. Do not pass in a POST or PUT request. (Float, Float-As-String, Integer)
     */
    coupon_discount?: string;
    /**
     * The number of shipping addresses associated with this transaction. A read-only value. Do not pass in a POST or PUT.
     */
    shipping_address_count?: number;
    /**
     * Indicates whether the shopper has selected an opt-in check box (on the checkout page) to receive emails. A read-only value. Do not pass in a POST or PUT.
     */
    is_email_opt_in?: boolean;
    /**
     * Orders submitted from the store’s website will include a `www` value. Orders submitted with the API will be set to `external`. This value is read-only. Do not pass in a POST or PUT.
     */
    order_source?: string;
    products?: products_Resource;
    shipping_addresses?: shippingAddresses_Resource;
    coupons?: coupons_Resource;
    /**
     * The staus ID of the order.
     */
    status_id?: number;
    billing_address?: {
        form_fields?: Array<formFields>;
    };
};
export declare namespace order_RespOnly {
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT request.
     */
    enum payment_status {
        AUTHORIZED = "authorized",
        CAPTURED = "captured",
        CAPTURE_PENDING = "capture pending",
        DECLINED = "declined",
        HELD_FOR_REVIEW = "held for review",
        PAID = "paid",
        PARTIALLY_REFUNDED = "partially refunded",
        PENDING = "pending",
        REFUNDED = "refunded",
        VOID = "void",
        VOID_PENDING = "void pending"
    }
}
