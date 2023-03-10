/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type shippingQuotes_Base = {
    /**
     * ID of the shipping quote.
     */
    id?: string;
    /**
     * UUID of the shipping quote.
     */
    uuid?: string;
    /**
     * Time the order was created in RFC 2822 format.
     */
    timestamp?: string;
    /**
     * ID of the shipping provider.
     */
    shipping_provider_id?: string;
    /**
     * This can vary based on the shipping provider. Manual shipping methods such as fixed will return an empty array. Shipping providers such as UPS will return an object with the shipping information. Since the shipping quote is tied to a shipping address only one quote will return in the response.
     */
    shipping_provider_quote?: Array<any>;
    /**
     * Code of the shipping provider.
     */
    provider_code?: string;
    /**
     * Code of the shipping carrier.
     */
    carrier_code?: string;
    /**
     * Type of delivery. This can vary based on shipping quote.
     */
    rate_code?: string;
    /**
     * This can vary based on shipping quote.
     */
    rate_id?: string;
    /**
     * Shipping method ID
     */
    method_id?: number;
};

