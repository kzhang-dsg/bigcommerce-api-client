/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The details of the Customer that has made the purchase.
 */
export type CustomerDetails = {
    customer_groups?: Array<{
        customer_group_id?: number;
        customer_group_name?: string;
    }>;
    customer_id?: number;
};

