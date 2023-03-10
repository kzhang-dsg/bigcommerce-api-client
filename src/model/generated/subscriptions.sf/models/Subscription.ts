/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Subscription properties.
 */
export type Subscription = {
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
    firstName?: string;
    /**
     * The last name of the subscriber.
     *
     */
    lastName?: string;
    /**
     * The source of the subscriber. Values are: `storefront`, `order`, or `custom`.
     *
     */
    source?: string;
    /**
     * The ID of the source order, if source was an order.
     *
     */
    orderId?: number | null;
    /**
     * The collection of consents the shopper is subscribing to.
     *
     */
    consents?: Array<any>;
};

