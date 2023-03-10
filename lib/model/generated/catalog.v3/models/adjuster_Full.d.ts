/**
 * Adjuster for Complex Rules.
 */
export type adjuster_Full = {
    /**
     * The type of adjuster for either the price or the weight of the variant, when the modifier value is selected on the storefront.
     *
     */
    adjuster?: adjuster_Full.adjuster | null;
    /**
     * The numeric amount by which the adjuster will change either the price or the weight of the variant, when the modifier value is selected on the storefront.
     *
     */
    adjuster_value?: number;
};
export declare namespace adjuster_Full {
    /**
     * The type of adjuster for either the price or the weight of the variant, when the modifier value is selected on the storefront.
     *
     */
    enum adjuster {
        RELATIVE = "relative",
        PERCENTAGE = "percentage"
    }
}
