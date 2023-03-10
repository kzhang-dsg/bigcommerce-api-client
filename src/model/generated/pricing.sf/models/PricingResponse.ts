/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PricingResponse = {
    data?: Array<{
        /**
         * The product ID this price was generated for
         */
        product_id?: number;
        /**
         * The (optional) variant ID this price was generated for
         */
        variant_id?: number;
        /**
         * The optional product option configuration this price was generated for
         */
        options?: Array<{
            /**
             * The ID of the variant option or modifier option configured for this price
             */
            option_id?: number;
            /**
             * The selected value ID for the configured option.
             */
            value_id?: number;
        }>;
        /**
         * The (optional) RRP/retail price configured for this product
         */
        retail_price?: {
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
        sale_price?: {
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
        minimum_advertised_price?: {
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
        price?: {
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
        calculated_price?: {
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
         * For estimated prices, the minimum/maximum price that will typically apply to this product
         */
        price_range?: {
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
        /**
         * For estimated prices, the minimum/maximum price that will typically apply to this product
         */
        retail_price_range?: {
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
        bulk_pricing?: Array<{
            /**
             * The minumum quantity required to trigger this bulk pricing discount
             */
            minimum?: number;
            /**
             * The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount
             */
            maximum?: number;
            discount_amount?: number;
            discount_type?: 'price' | 'percent' | 'fixed';
        }>;
    }>;
    /**
     * Response metadata.
     */
    meta?: any;
};

