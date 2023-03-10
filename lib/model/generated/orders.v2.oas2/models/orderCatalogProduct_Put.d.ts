import type { orderCatalogProduct_Post } from './orderCatalogProduct_Post';
/**
 * **Usage notes**
 *
 * To `add` a product to an existing order, don't include `id` in the payload. When adding a product with variants, `product_options` are required.
 * To `update` an order product line, `id` is required. The payload should only contain the fields that need to be updated. The fields that you omit will not be changed.
 *
 * Note the following constraints and default field values:
 * - `xxx` and `xxx_customer` always hold the same value. Updating either `xxx` or `xxx_customer` will change the value of both fields.
 * - If both fields `xxx` and `xxx_customer` are present, they must have same value.
 * - Empty strings `''` and `null` are invalid for `xxx`, `xxx_customer`, and `xxx_merchant`.
 * - When updating an existing order product without changing the variant, product, or product options, requests that do not contain `xxx_merchant` will fail.
 * - When updating an existing order product, requests that do not contain both fields `xxx` and `xxx_customer` will fail.
 * - Empty strings `''` and `null` are invalid for `xxx`, `xxx_customer, and `xxx_merchant`. If `xxx_merchant` is omitted, it will default to have the catalog value.
 * - If both fields `xxx` and `xxx_customer` are omitted from the request, they will default to the catalog value.
 *
 */
export type orderCatalogProduct_Put = ({
    /**
     * The order product `id`. To add a product to an existing order, don't include `id` in the payload. `id` is required when updating an order product.
     */
    id?: number;
} & orderCatalogProduct_Post);
