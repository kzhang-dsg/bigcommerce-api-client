export type consignmentShippingOption_Base = {
    /**
     * Read only.
     */
    readonly description?: string;
    id?: string;
    /**
     * Specifies the type of shipping option; for example, flat rate, UPS, etc.
     */
    type?: string;
    imageUrl?: string;
    cost?: number;
    /**
     * An estimate of the arrival time.
     */
    transitTime?: string;
};
