/**
 * Object representing a destination or origin address for items.
 */
export type ShippingAddress = {
    street_1?: string;
    street_2?: string;
    zip: string;
    city?: string;
    /**
     * State in ISO_3166 2 format.
     */
    state_iso2?: string;
    /**
     * Country in ISO_3166 2 format.
     */
    country_iso2: string;
    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    address_type?: ShippingAddress.address_type;
};
export declare namespace ShippingAddress {
    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    enum address_type {
        RESIDENTIAL = "RESIDENTIAL",
        COMMERCIAL = "COMMERCIAL"
    }
}
