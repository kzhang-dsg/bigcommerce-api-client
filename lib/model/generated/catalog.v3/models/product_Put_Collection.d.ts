import type { product_Base } from './product_Base';
import type { product_Full } from './product_Full';
/**
 * The model for batch updating products.
 */
export type product_Put_Collection = Array<product_Base & {
    id: product_Full['id'];
}>;
