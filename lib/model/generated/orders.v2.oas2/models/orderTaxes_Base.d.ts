export type orderTaxes_Base = {
    /**
     * The unique numeric identifier of the taxes object.
     */
    id?: number;
    /**
     * The unique numeric identifier of the order to which the tax was applied. NOTE: Not included if the store was using the automatic tax feature.
     */
    order_id?: number;
    /**
     * The unique numeric identifier of the order address object associated with the order. NOTE: Not included if the store was using the automatic tax feature.
     */
    order_address_id?: number;
    /**
     * The unique numeric identifier of the tax rate.
     */
    tax_rate_id?: number;
    /**
     * The unique numeric identifier of the tax class object. NOTE: Will be 0 if automatic tax was enabled, or if the default tax class was used.
     */
    tax_class_id?: number;
    /**
     * The name of the tax class object.
     */
    name?: string;
    /**
     * The name of the type of tax that was applied. NOTE: will be "Automatic Tax" if automatic tax was enabled. Will be "API Tax Override" if the order was created with V2 Orders API.
     */
    class?: string;
    /**
     * The tax rate.  The priority order in which the tax is applied (Float, Float-As-String, Integer)
     */
    rate?: string;
    /**
     * The order in which the tax is applied.
     */
    priority?: number;
    /**
     * The amount of tax calculated on the order. (Float, Float-As-String, Integer)
     */
    priority_amount?: string;
    /**
     * (Float, Float-As-String, Integer)
     */
    line_amount?: string;
    /**
     * If the `line_item_type` is `item` or `handling` then this field will be the order product id. Otherwise the field will return as null.
     */
    order_product_id?: string;
    /**
     * Type of tax on item.
     */
    line_item_type?: orderTaxes_Base.line_item_type;
};
export declare namespace orderTaxes_Base {
    /**
     * Type of tax on item.
     */
    enum line_item_type {
        ITEM = "item",
        SHIPPING = "shipping",
        HANDLING = "handling",
        GIFT_WRAPPING = "gift-wrapping"
    }
}
