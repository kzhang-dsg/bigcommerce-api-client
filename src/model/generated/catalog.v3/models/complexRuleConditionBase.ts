/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Complex rules may return with conditions that apply to one or more variants, or with a single modifier value (if the rules were created using the v2 API or the control panel). Complex rules created or updated in the v3 API must have conditions that either reference multiple `modifier_value_id`’s, or else reference a `modifier_value_id` and a `variant_id`.
 */
export type complexRuleConditionBase = {
    /**
     * The unique numeric ID of the rule condition; increments sequentially. Read-Only
     *
     */
    id?: number | null;
    /**
     * The unique numeric ID of the rule with which the condition is associated.
     * Read-Only
     */
    rule_id?: number | null;
    /**
     * The unique numeric ID of the modifier with which the rule condition is associated.
     * Required in /POST.
     */
    modifier_id: number | null;
    /**
     * The unique numeric ID of the modifier value with which the rule condition is associated.
     * Required in /POST.
     */
    modifier_value_id: number | null;
    /**
     * The unique numeric ID of the variant with which the rule condition is associated.
     * Required in /POST.
     */
    variant_id: number | null;
    /**
     * (READ-ONLY:) The unique numeric ID of the SKU (v2 API), or Combination, with which the rule condition is associated. This is to maintain cross-compatibility between v2 and v3.
     *
     */
    combination_id?: number;
};

