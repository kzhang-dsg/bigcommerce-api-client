/**
 * For estimated prices, the minimum/maximum price that will typically apply to this product
 */
export type PriceRange = {
    /**
     * The price for a product including estimates for tax
     */
    minimum?: {
        /**
         * The price provided by the merchant as entered in their catalog/price list (may be inc or ex)
         */
        as_entered?: number;
        /**
         * Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax exclusive price for this product based on the provided customer group
         */
        tax_exclusive?: number;
        /**
         * The estimated tax inclusive price for this product based on the provided customer group
         */
        tax_inclusive?: number;
    };
    /**
     * The price for a product including estimates for tax
     */
    maximum?: {
        /**
         * The price provided by the merchant as entered in their catalog/price list (may be inc or ex)
         */
        as_entered?: number;
        /**
         * Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction
         */
        entered_inclusive?: boolean;
        /**
         * The estimated tax exclusive price for this product based on the provided customer group
         */
        tax_exclusive?: number;
        /**
         * The estimated tax inclusive price for this product based on the provided customer group
         */
        tax_inclusive?: number;
    };
};
