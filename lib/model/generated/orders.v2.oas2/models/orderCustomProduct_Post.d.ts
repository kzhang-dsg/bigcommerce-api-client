/**
 * **Usage notes**
 *
 * Provide one of these fields with a non-empty value:
 * - `name`
 * - `name_customer`
 * - `name_merchant`
 *
 * Note the following constraints and default field values:
 * - Null and `''` empty strings are invalid for `name`, `name_customer`, and `name_merchant`.
 * - `name` and `name_customer` always share the same value; updating one updates the other.
 * - When you omit both `name` and `name_customer`, they default to the value of `name_merchant`.
 * - When you omit `name_merchant`, it defaults to the value that `name` and `name_customer` share.
 */
export type orderCustomProduct_Post = {
    /**
     * Alias for name_customer. The product name that is shown to customer in storefront.
     */
    name: string;
    /**
     * The product name that is shown to customer in storefront.
     */
    name_customer?: string;
    /**
     * The product name that is shown to merchant in control panel.
     */
    name_merchant?: string;
    quantity: number;
    price_inc_tax: number;
    price_ex_tax: number;
    upc?: string;
    sku?: string;
};
