export type ShippingZone = {
    /**
     * Zone ID. Read-only.
     */
    readonly id?: number;
    /**
     * Zone name. Required for PUT requests.
     */
    name: string;
    type?: ShippingZone.type;
    /**
     * Array of zone locations.
     */
    locations?: Array<{
        /**
         * Location’s ID.
         */
        id?: number;
        /**
         * Location’s ZIP/postal code.
         */
        zip?: string;
        /**
         * 2-letter ISO Alpha-2 code for the country.
         */
        country_iso2?: string;
        /**
         * ISO Alpha-2 code for the state.
         */
        state_iso2?: string;
    }>;
    free_shipping?: {
        enabled?: boolean;
        /**
         * (Float, Float-As-String, Integer)
         */
        minimum_sub_total?: string;
        exclude_fixed_shipping_products?: boolean;
    };
    handling_fees?: ({
        /**
         * Flat-rate handling fee applied to shipping cost.
         */
        fixed_surcharge?: string;
        /**
         * Indicates whether store displays handling fee separately at checkout.
         */
        display_separately?: boolean;
    } | {
        /**
         * Percentage handling fee applied to shipping cost.
         */
        percentage_surcharge?: string;
        /**
         * Indicates whether store displays handling fee separately at checkout.
         */
        display_separately?: boolean;
    });
    /**
     * Whether this shipping zone is enabled.
     */
    enabled?: boolean;
};
export declare namespace ShippingZone {
    enum type {
        ZIP = "zip",
        COUNTRY = "country",
        STATE = "state",
        GLOBAL = "global"
    }
}
