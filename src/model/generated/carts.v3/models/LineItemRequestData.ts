/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LineItemRequestData = {
    quantity: number;
    product_id: number;
    /**
     * Variant ID. Required if the product has variants.
     */
    variant_id: number;
    list_price?: number;
    option_selections?: Array<{
        option_id?: number;
        option_value?: string;
    }>;
};

