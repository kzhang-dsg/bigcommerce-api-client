import type { productModifier_Base } from './productModifier_Base';
import type { productModifierOptionValue_Full } from './productModifierOptionValue_Full';
/**
 * Product Modifier
 */
export type productModifier_Full = (productModifier_Base & {
    /**
     * The unique numeric ID of the modifier; increments sequentially.
     *
     */
    id?: number;
    /**
     * The unique numeric ID of the product to which the option belongs.
     *
     */
    product_id?: number;
    /**
     * The unique option name. Auto-generated from the display name, a timestamp, and the product ID.
     *
     */
    name?: string;
    option_values?: Array<productModifierOptionValue_Full>;
});
