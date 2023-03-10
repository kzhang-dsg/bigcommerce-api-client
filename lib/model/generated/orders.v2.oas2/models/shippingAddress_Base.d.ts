/**
 * Shipping Address properties common to all requests and responses.
 */
export type shippingAddress_Base = {
    first_name?: string;
    last_name?: string;
    company?: string;
    /**
     * Street address (first line).
     */
    street_1?: string;
    /**
     * Street address (second line).
     */
    street_2?: string;
    city?: string;
    state?: string;
    /**
     * Zip or postal code, as a string.
     */
    zip?: string;
    country?: string;
    /**
     * 2-letter ISO Alpha-2 code for the country.
     */
    country_iso2?: string;
    /**
     * Recipient’s telephone number.
     */
    phone?: string;
    /**
     * Recipient’s email address.
     */
    email?: string;
    /**
     * Text code identifying the BigCommerce shipping module selected by the customer.
     */
    shipping_method?: string;
};
