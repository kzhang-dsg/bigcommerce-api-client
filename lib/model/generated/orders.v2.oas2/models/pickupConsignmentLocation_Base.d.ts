export type pickupConsignmentLocation_Base = {
    /**
     * The name of the pickup location.
     */
    name?: string;
    /**
     * The code of the pickup location.
     */
    code?: string;
    /**
     * Street address (first line).
     */
    address_line_1?: string;
    /**
     * Street address (second line).
     */
    address_line_2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    /**
     * 2-letter ISO Alpha-2 code for the country.
     */
    country_alpha2?: string;
    /**
     * Pickup location's email address.
     */
    email?: string;
    /**
     * Pickup location's phone number.
     */
    phone?: string;
};
