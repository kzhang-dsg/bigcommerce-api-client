/**
 * Response payload for the BigCommerce API.
 */
export type PriceRecordResponse = {
    /**
     * The Price Record object.
     */
    data?: {
        /**
         * The list price for the variant mapped in a Price List. Overrides any existing or Catalog list price for the variant/product.
         *
         */
        price?: number;
        /**
         * The sale price for the variant mapped in a Price List. Overrides any existing or Catalog sale price for the variant/product. If empty, the sale price will be treated as not being set on this variant.
         *
         */
        sale_price?: number;
        /**
         * The retail price for the variant mapped in a Price List. Overrides any existing or Catalog retail price for the variant/product. If empty, the retail price will be treated as not being set on this variant.
         *
         */
        retail_price?: number;
        /**
         * The MAP (Minimum Advertised Price) for the variant mapped in a Price List. Overrides any existing or Catalog MAP price for the variant/product. If empty, the MAP price will be treated as not being set on this variant.
         *
         */
        map_price?: number;
        bulk_pricing_tiers?: Array<{
            /**
             * The minimum quantity of associated variant in the cart needed to qualify for this tiers pricing.
             *
             */
            quantity_min?: number;
            /**
             * The maximum allowed quantity of associated variant in the cart to qualify for this tiers pricing.
             *
             */
            quantity_max?: number;
            /**
             * The type of adjustment that is made. Acceptable values: price – the adjustment amount per product; percent – the adjustment as a percentage of the original price; fixed – the adjusted absolute price of the product.
             *
             */
            type?: 'fixed' | 'price' | 'percent';
            /**
             * The price adjustment amount. This value along with the type will decide the price per variant for the pricing tier.
             *
             */
            amount?: number;
        }>;
        /**
         * The SKU code associated with this `Price Record` if requested and it exists.
         *
         */
        sku?: string;
    };
    /**
     * Empty meta object; may be used later.
     */
    meta?: any;
};
