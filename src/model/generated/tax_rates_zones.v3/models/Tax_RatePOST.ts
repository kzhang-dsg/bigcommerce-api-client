/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Tax_RatePOST = {
    /**
     * Tax rates for tax classes. You must assign at least one tax rate for each tax class defined on a store.
     */
    class_rates: Array<{
        /**
         * The tax rate that you apply to the items in a tax class.
         */
        rate: number;
        /**
         * ID of a tax class. You must associate a tax rate with a tax class. The rate will apply to all items in this tax class.
         */
        tax_class_id: number;
    }>;
    /**
     * Indicates whether a tax rate is enabled. Tax operations are only for enabled zones.
     */
    enabled?: boolean;
    /**
     * The human-readable name for this tax zone. The name displays on the merchant control panel and to shoppers, depending on store tax settings.
     */
    name: string;
    /**
     * Allows for compounding tax rates, common in certain jurisdictions.
     */
    priority?: number;
    /**
     * ID of an associated tax zone. You must associate a tax rate with a tax zone.
     */
    tax_zone_id: number;
};

