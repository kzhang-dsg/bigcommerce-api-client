export type BulkPricingTier = {
    /**
     * The minumum quantity required to trigger this bulk pricing discount
     */
    minimum?: number;
    /**
     * The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount
     */
    maximum?: number;
    discount_amount?: number;
    discount_type?: BulkPricingTier.discount_type;
};
export declare namespace BulkPricingTier {
    enum discount_type {
        PRICE = "price",
        PERCENT = "percent",
        FIXED = "fixed"
    }
}
