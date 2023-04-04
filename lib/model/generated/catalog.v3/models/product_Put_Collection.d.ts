import type { product_Base } from './product_Base';
/**
 * The model for batch updating products.
 */
export type product_Put_Collection = Array<({
    /**
     * Unique ID of the *Product*. Read-Only.
     */
    readonly id: number;
} & product_Base)>;
