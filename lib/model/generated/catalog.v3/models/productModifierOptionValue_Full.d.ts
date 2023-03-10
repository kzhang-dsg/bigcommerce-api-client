import type { productModifierOptionValue_Base } from './productModifierOptionValue_Base';
/**
 * Product Modifer `option_value`.
 */
export type productModifierOptionValue_Full = (productModifierOptionValue_Base & {
    /**
     * The unique numeric ID of the value; increments sequentially.
     *
     */
    id?: number;
    option_id?: number;
});
