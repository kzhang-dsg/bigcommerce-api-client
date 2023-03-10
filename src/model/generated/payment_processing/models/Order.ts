/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Order = {
    /**
     * Identifier for the order
     */
    id: number;
    /**
     * Whether this is a recurring order. If the order is recurring this field should be set to true in order to let the payment gateway know.
     */
    is_recurring?: boolean;
};

