export type TaxClass = {
    /**
     * The provider-specific tax code for this item. Items can be classified with tax codes relevant to each Tax Provider, configured by the merchant, and assigned to their products within BigCommerce. A tax code is intended to apply to multiple products. This code should match the tax codes provided by the third-party integration.
     */
    code: string;
    /**
     * The ID of the tax class defined in the merchant’s BigCommerce store. May have a UUID value.
     */
    class_id: string;
    /**
     * The human-readable name of this tax class in the merchant’s BigCommerce store.
     */
    name: string;
};
