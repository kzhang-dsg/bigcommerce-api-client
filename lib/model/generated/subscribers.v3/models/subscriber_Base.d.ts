/**
 * Common Subscriber properties.
 */
export type subscriber_Base = {
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
    /**
     * The channel ID where the subscriber was created.
     */
    channel_id?: number;
};
