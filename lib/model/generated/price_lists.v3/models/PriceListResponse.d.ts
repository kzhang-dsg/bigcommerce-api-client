/**
 * PriceList Reponse returns for:
 *
 * * Create a PriceList
 * * Get a PriceList
 * * Update a PriceList
 */
export type PriceListResponse = {
    data?: {
        /**
         * The unique name of the Price List. Required in a POST request.
         *
         */
        name: string;
        /**
         * Whether or not this `Price List` and its prices are active. Defaults to `true`.
         *
         */
        active?: boolean;
    };
    /**
     * Empty meta object; may be used later.
     */
    meta?: any;
};
