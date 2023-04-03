/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type bulkPricingRuleFull_Response = {
    /**
     * Unique ID of the *Bulk Pricing Rule*. Read-Only.
     */
    readonly id?: number;
    /**
     * The minimum inclusive quantity of a product to satisfy this rule. Must be greater than or equal to zero. For `fixed` rules, the minimum quantity canʼt be less than two.
     *
     */
    quantity_min?: number;
    /**
     * The maximum inclusive quantity of a product to satisfy this rule. Must be greater than the `quantity_min` value – unless this field has a value of 0 (zero), in which case there will be no maximum bound for this rule.
     */
    quantity_max?: number;
    /**
     * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product.
     */
    type?: bulkPricingRuleFull_Response.type;
    /**
     * The adjustment amount. Depending on the rule `type`, may represent a fixed dollar amount or a percentage.
     */
    amount?: number;
};

export namespace bulkPricingRuleFull_Response {

    /**
     * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product.
     */
    export enum type {
        PRICE = 'price',
        PERCENT = 'percent',
        FIXED = 'fixed',
    }


}

