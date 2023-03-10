/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HandlingFees = ({
    /**
     * Flat-rate handling fee applied to shipping cost.
     */
    fixed_surcharge?: string;
    /**
     * Indicates whether store displays handling fee separately at checkout.
     */
    display_separately?: boolean;
} | {
    /**
     * Percentage handling fee applied to shipping cost.
     */
    percentage_surcharge?: string;
    /**
     * Indicates whether store displays handling fee separately at checkout.
     */
    display_separately?: boolean;
});

