/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Note:
 * - `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
 * - If both fields `xxx` and `xxx_customer` are present, they must have same value.
 * - Empty strings `''` and `null` are invalid for `xxx` and `xxx_customer, and `xxx_merchant`.
 * - `xxx`, `xxx_customer`, and `xxx_merchant` default to the value from `catalog` if not supplied in the request.
 *
 */
export type orderCatalogProduct_Post = {
    product_id?: number;
    /**
     * Alias for `name_customer`. The product name that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
     */
    name?: string;
    /**
     * The product name that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
     */
    name_customer?: string;
    /**
     * The product name that is shown to merchant in control panel.
     */
    name_merchant?: string;
    /**
     * List of product variant options and modifiers. `product_options` are required when adding a product with variants and not specifying the `variant_id`, or when products have mandatory modifiers.
     */
    product_options?: Array<{
        /**
         * Numeric ID of an option applied to the product from a list of options available to the product. This field has the same value as `product_option_id` when [retrieving products in an order](/docs/rest-management/orders/order-products#list-order-products).
         */
        id?: number;
        /**
         * Depending on the option type, value can be one of the following:
         * - The variant option value id or the modifier value id for modifier types with a list of defined values, such as drop down or checkbox modifiers.
         * - The modifier value for modifier types without a list of defined values, such as text field or date field modifiers.
         *
         * Notes:
         * - The API does not currently support the following option types:
         * - File upload
         * - Pick list
         * - For date modifiers use either the `YYYY-MM-DDThh:mm:ss±hh:mm` or the `YYYY-MM-DD` ISO-8601 formats. The date field modifier values are saved and returned as timestamps. For values entered using the YYYY-MM-DD format, the store timezone is used when creating the timestamp.
         * - For multi-line text field modifiers, use the `\n` characters for separating the lines.
         */
        value?: string;
        /**
         * Alias for display_name_customer. The product option name that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
         */
        display_name?: string;
        /**
         * The product option name that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
         */
        display_name_customer?: string;
        /**
         * The product option name that is shown to merchant in Control Panel.
         */
        display_name_merchant?: string;
        /**
         * Alias for display_value_customer. The product option value that is shown to customer in storefront. `xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
         */
        display_value?: string;
        /**
         * The product option value that is shown to merchant in Control Panel.
         */
        display_value_merchant?: string;
        /**
         * The product option value that is shown to a customer in storefront.`xxx` and `xxx_customer` always hold the same value, updating either `xxx` or `xxx_customer` will change value for both of those fields.
         */
        display_value_customer?: string;
    }>;
    quantity?: number;
    price_inc_tax?: number;
    price_ex_tax?: number;
    upc?: string;
    /**
     * ""
     */
    variant_id?: number;
    /**
     * ID of the gift wrapping that will be used for this product. If provided, then `wrapping_cost_ex_tax` and `wrapping_cost_inc_tax` are required. When updating an order product line item, if `wrapping_id` is set to `0` and no other wrapping fields are provided,then the wrapping will be removed from the order product.
     */
    wrapping_id?: number;
    /**
     * If the `wrapping_id` is provided, this field will populate with the name of the gift wrapping that is to be used.
     */
    wrapping_name?: string;
    wrapping_message?: string;
    /**
     * When provided, this value should be equal to `wrapping_cost_ex_tax` times quantity to accurately reflect wrapping cost per unit.
     */
    wrapping_cost_ex_tax?: number;
    /**
     * When provided, this value should be equal to `wrapping_cost_inc_tax` times quantity to accurately reflect wrapping cost per unit.
     */
    wrapping_cost_inc_tax?: number;
};

