/**
 * **Usage notes:**
 *
 * To `add` a custom product to an existing order, don't include `id` in the payload. You must provide a non-empty value for at least one of these fields: `name`, `name_customer`, or `name_merchant`.
 * To `update` an order product line, `id` is required. The payload should only contain the fields that need to be updated. You cannot change omitted fields.
 *
 * Note the following constraints and default field values:
 * - Empty strings `''` and `null` are invalid for `xxx`, `xxx_customer`, and `xxx_merchant`.
 * - `name` and `name_customer` always hold the same value; updating either `name` or `name_customer` will change the value for both of those fields.
 * - If both fields `name` and `name_customer` are present, they must have the same value.
 * - When updating an existing order product, if you omit both fields `name` and `name_customer` from the request, they will not be updated.
 * - When updating an existing order product, if you omit `name_merchant` from the request, it will not be updated.
 * - When adding a product, if you omit `name_merchant`, it will be set to the value of `name` (or `name_customer`).
 * - When adding a new product to an existing order, if you omit both fields `name` and `name_customer`, they will be set to the value of `name_merchant`.
 *
 */
export type orderCustomProduct_Put = {
    /**
     * Alias for name_customer. The product name that is shown to customer in storefront.
     *
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
    price_ex_tax: number;
    price_inc_tax: number;
    sku?: string;
    upc?: string;
    /**
     * ID of the product line.
     */
    id?: number;
};
