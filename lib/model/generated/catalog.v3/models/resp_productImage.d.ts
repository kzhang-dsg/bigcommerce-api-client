import type { productImage_Full } from './productImage_Full';
/**
 * Image Response returns for:
 * * Create Variant Image
 * * Create Modifier Image
 * * Create Category Image
 * * Create Brand Image
 */
export type resp_productImage = {
    data?: productImage_Full;
    /**
     * Empty meta object; may be used later.
     */
    meta?: any;
};
