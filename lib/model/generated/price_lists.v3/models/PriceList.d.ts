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
    date_created?: string;
    /**
     * The date on which the `Price List` was created.
     *
     */
    date_modified?: string;
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
