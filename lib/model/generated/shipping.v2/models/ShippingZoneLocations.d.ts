export type ShippingZoneLocations = {
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
};
