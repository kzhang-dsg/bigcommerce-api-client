/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BulkPricingTier = {
    /**
     * The minimum quantity of associated variant in the cart needed to qualify for this pricing tier.
     *
     */
    quantity_min?: number;
    /**
     * The maximum allowed quantity of associated variant in the cart to qualify for this pricing tier.
     *
     */
    quantity_max?: number;
    /**
     * The type of adjustment that is made. Acceptable values: price – the adjustment amount per product; percent – the adjustment as a percentage of the original price; fixed – the adjusted absolute price of the product.
     *
     */
    type?: BulkPricingTier.type;
    /**
     * The price adjustment amount. This value together with the adjustment type determines the price per variant for the pricing tier.
     *
     */
    amount?: number;
};

export namespace BulkPricingTier {

    /**
     * The type of adjustment that is made. Acceptable values: price – the adjustment amount per product; percent – the adjustment as a percentage of the original price; fixed – the adjusted absolute price of the product.
     *
     */
    export enum type {
        FIXED = 'fixed',
        PRICE = 'price',
        PERCENT = 'percent',
    }


}

