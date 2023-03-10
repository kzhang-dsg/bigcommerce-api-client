/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Creates a Price List.
 */
export type PriceListPost = {
    /**
     * The unique name of the Price List. Required in a POST request.
     *
     */
    name: string;
    /**
     * Whether or not this `Price List` and its prices are active. Defaults to `true`.
     *
     */
    active?: boolean;
};

