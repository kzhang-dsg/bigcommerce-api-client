export type Subscriber = ({
    /**
     * The unique numeric ID of the subscriber; increments sequentially.
     *
     */
    id?: number;
    /**
     * The email of the subscriber. Must be unique.
     *
     */
    email?: string;
    /**
     * The first name of the subscriber.
     *
     */
    first_name?: string;
    /**
     * The last name of the subscriber.
     *
     */
    last_name?: string;
    /**
     * The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
     *
     */
    source?: string;
    /**
     * The ID of the source order, if source was an order.
     *
     */
    order_id?: number | null;
} & {
    /**
     * The date on which the subscriber was modified.
     *
     */
    date_modified?: string;
    /**
     * The date of which the subscriber was created.
     *
     */
    date_created?: string;
});
