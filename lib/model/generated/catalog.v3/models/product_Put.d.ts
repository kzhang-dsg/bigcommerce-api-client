import type { product_Base } from './product_Base';
import type { productVariant_Put_Product } from './productVariant_Put_Product';
/**
 * The model for a PUT to update a product.
 */
export type product_Put = (product_Base & {
    variants?: Array<productVariant_Put_Product>;
});
