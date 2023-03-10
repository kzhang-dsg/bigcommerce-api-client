/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type requestCartPostLineItem = ({
    /**
     * ID of the product.
     */
    productId: number;
    /**
     * Quantity of this item.
     */
    quantity: number;
} | {
    /**
     * ID of the product.
     */
    productId: number;
    /**
     * Quantity of this item.
     */
    quantity: number;
    /**
     * ID of the variant.
     */
    variantId: number;
} | {
    /**
     * ID of the product.
     */
    productId: number;
    /**
     * Quantity of this item.
     */
    quantity: number;
    variantId: number;
    /**
     * Array of `OptionSelection` objects.
     */
    optionSelections: Array<({
        /**
         * ID of the option, same as the `nameId`.
         */
        optionId?: number;
    } | {
        /**
         * Value of the option, same as the `valueId`.
         */
        optionValue?: (string | number | {
            month?: string;
            day?: string;
            year?: string;
        });
    })>;
});

