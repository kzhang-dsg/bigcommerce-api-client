/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PriceList = ({
    /**
     * The unique numeric ID of the `Price List`; increments sequentially.
     *
     */
    id?: number;
    /**
     * The date on which the `Price List` was created.
     *
     */
    date_created?: Date;
    /**
     * The date on which the `Price List` was created.
     *
     */
    date_modified?: Date;
} & {
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
});

