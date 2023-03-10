import type { billingAddress_Base } from './billingAddress_Base';
/**
 * Order properties used in `PUT` and `POST` requests and responses.
 */
export type order_Shared = {
    /**
     * The value of the base handling cost. (Float, Float-As-String, Integer)
     */
    base_handling_cost?: string;
    /**
     * The value of the base shipping cost. (Float, Float-As-String, Integer)
     */
    base_shipping_cost?: string;
    /**
     * The value of the base wrapping cost expressed as a floating point number to four decimal places in string format.
     */
    base_wrapping_cost?: string;
    billing_address?: billingAddress_Base;
    /**
     * Shows where the order originated. The channel_id will default to 1.
     */
    channel_id?: number;
    customer_id?: number;
    /**
     * Message that the customer entered (number, options) -o the `Order Comments` box during checkout.
     */
    customer_message?: string;
    /**
     * The date the order was created, formatted in the RFC-2822 standard. You set this attribute on Order creation (POST) to support the migration of historical orders. If you do not provide a value, then it will default to the current date/time. e.g., `Tue, 20 Nov 2012 00:00:00 +0000`.
     */
    date_created?: string;
    /**
     * The currency code of the transactional currency the shopper pays in; writeable when multi-currency is enabled.
     */
    default_currency_code?: string;
    /**
     * Amount of discount for this transaction. (Float, Float-As-String, Integer)
     */
    discount_amount?: string;
    /**
     * If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be `0`.
     */
    ebay_order_id?: string;
    /**
     * The order ID in another system, such as the Amazon Order ID if this is an Amazon order. After setting it, you cannot write to or update the `external_id`. You can update this field using a POST request, but a PUT request to update the order will return a 400 error.  Please remove it from your request before trying again.
     */
    external_id?: string | null;
    /**
     * The merchant ID represents an upstream order from an external system. It is the source of truth for orders. After setting it, you cannot write to or update the `external_merchant_id`. For example, you can update the Facebook by Meta page ID in a POST request, but a PUT request to update the order will return a 400 error. Please remove it from your request before trying again.
     */
    external_merchant_id?: string | null;
    /**
     * This value identifies an external system that generated the order and submitted it to BigCommerce with the Orders API.
     * * When supplying the value, we recommend combining the type of system and vendor, e.g., ERP (Acumatica) or POS (Square).
     * * If you are migrating historical orders processed on another eCommerce platform to BigCommerce, supply the following code as the value: M-MIG. This code will exclude historical orders from the store’s GMV/order count, which factors into pricing.
     * * If you do not provide a value, then it will default to null.
     */
    external_source?: string | null;
    /**
     * The full name of the country where the customer made the purchase, based on the IP.
     */
    geoip_country?: string;
    /**
     * The country where the customer made the purchase, in ISO2 format, based on the IP.
     */
    geoip_country_iso2?: string;
    /**
     * The value of the handling cost, excluding tax. (Float, Float-As-String, Integer)
     */
    handling_cost_ex_tax?: string;
    /**
     * The value of the handling cost, including tax. (Float, Float-As-String, Integer)
     */
    handling_cost_inc_tax?: string;
    /**
     * IPv4 Address of the customer, if known.
     *
     * Note: You can set either `ip_address` or `ip_address_v6`. Setting the `ip_address` value will reset the `ip_address_v6` value and vice versa.
     */
    ip_address?: string;
    /**
     * IPv6 Address of the customer, if known.
     *
     * Note: You can set either `ip_address` or `ip_address_v6`. Setting the `ip_address_v6` value will reset the `ip_address` value and vice versa.
     */
    ip_address_v6?: string;
    /**
     * Indicates whether the order was deleted (archived). Set to to true, to archive an order.
     */
    is_deleted?: boolean;
    /**
     * The number of items that have been shipped.
     */
    items_shipped?: number;
    /**
     * The total number of items in the order.
     */
    items_total?: number;
    /**
     * Whether this is an order for digital products.
     */
    order_is_digital?: boolean;
    /**
     * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.
     */
    payment_method?: order_Shared.payment_method;
    /**
     * The external Transaction ID/Payment ID within this order’s payment provider (if a payment provider was used).
     */
    payment_provider_id?: (string | number);
    /**
     * The amount refunded from this transaction; always returns `0`. (Float, Float-As-String, Integer)
     */
    refunded_amount?: string;
    /**
     * The value of shipping cost, excluding tax. (Float, Float-As-String, Integer)
     */
    shipping_cost_ex_tax?: string;
    /**
     * The value of shipping cost, including tax. (Float, Float-As-String, Integer)
     */
    shipping_cost_inc_tax?: string;
    /**
     * Any additional notes for staff.
     */
    staff_notes?: string;
    /**
     * The status ID of the order.
     */
    status_id?: number;
    /**
     * Override value for subtotal excluding tax. If specified, the field `subtotal_inc_tax` is also required. (Float, Float-As-String, Integer)
     */
    subtotal_ex_tax?: string;
    /**
     * Override value for subtotal including tax. If specified, the field `subtotal_ex_tax` is also required. (Float, Float-As-String, Integer)
     */
    subtotal_inc_tax?: string;
    /**
     * BasicTaxProvider - Tax is set to manual and order is created in the store.
     *
     * AvaTaxProvider - Tax is set to automatic and order is created in the store. Used for Avalara.
     *
     * "" (empty string) - The order is created with the API, or the tax provider is unknown.
     *
     */
    tax_provider_id?: order_Shared.tax_provider_id;
    /**
     * The customer’s locale.
     */
    customer_locale?: string;
    /**
     * The external id of the order.
     */
    external_order_id?: string;
    /**
     * Override value for the total, excluding tax. If specified, the field `total_inc_tax` is also required. (Float, Float-As-String, Integer)
     */
    total_ex_tax?: string;
    /**
     * Override value for the total, including tax. If specified, the field `total_ex_tax` is also required. (Float, Float-As-String, Integer)
     */
    total_inc_tax?: string;
    /**
     * The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer)
     */
    wrapping_cost_ex_tax?: string;
    /**
     * The value of the wrapping cost, including tax. (Float, Float-As-String, Integer)
     */
    wrapping_cost_inc_tax?: string;
};
export declare namespace order_Shared {
    /**
     * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.
     */
    enum payment_method {
        CREDIT_CARD = "Credit Card",
        CASH = "Cash",
        TEST_PAYMENT_GATEWAY = "Test Payment Gateway",
        MANUAL = "Manual"
    }
    /**
     * BasicTaxProvider - Tax is set to manual and order is created in the store.
     *
     * AvaTaxProvider - Tax is set to automatic and order is created in the store. Used for Avalara.
     *
     * "" (empty string) - The order is created with the API, or the tax provider is unknown.
     *
     */
    enum tax_provider_id {
        BASIC_TAX_PROVIDER = "BasicTaxProvider",
        AVA_TAX_PROVIDER = "AvaTaxProvider",
        BLANK = ""
    }
}
