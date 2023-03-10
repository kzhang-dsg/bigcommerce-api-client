import type { adjuster_Full } from './adjuster_Full';
import type { complexRuleConditionBase } from './complexRuleConditionBase';
/**
 * Common ComplexRule properties.
 */
export type complexRule_Base = {
    /**
     * The unique numeric ID of the rule; increments sequentially.
     * Read-Only
     */
    id?: number;
    /**
     * The unique numeric ID of the product with which the rule is associated; increments sequentially.
     *
     */
    product_id?: number | null;
    /**
     * The priority to give this rule when making adjustments to the product properties.
     *
     */
    sort_order?: number;
    /**
     * Flag for determining whether the rule is to be used when adjusting a product's price, weight, image, or availabilty.
     *
     */
    enabled?: boolean;
    /**
     * Flag for determining whether other rules should not be applied after this rule has been applied.
     *
     */
    stop?: boolean;
    /**
     * Flag for determining whether the rule should disable purchasing of a product when the conditions are applied.
     *
     */
    purchasing_disabled?: boolean;
    /**
     * Message displayed on the storefront when a rule disables the purchasing of a product.
     *
     */
    purchasing_disabled_message?: string;
    /**
     * Flag for determining whether the rule should hide purchasing of a product when the conditions are applied.
     *
     */
    purchasing_hidden?: boolean;
    /**
     * The URL for an image displayed on the storefront when the conditions are applied. Limit of 8MB per file.
     *
     */
    image_url?: string;
    price_adjuster?: adjuster_Full;
    weight_adjuster?: adjuster_Full;
    conditions?: Array<complexRuleConditionBase>;
};
