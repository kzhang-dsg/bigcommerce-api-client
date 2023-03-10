/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';

export type AssignmentForPutResponse = {
    data?: {
        /**
         * Unique identifier for this price list assignment.
         */
        id?: number;
        /**
         * Price list ID for assignment.
         */
        price_list_id?: number;
        /**
         * Customer group ID for assignment.
         */
        customer_group_id?: number;
        /**
         * Channel ID for assignment.
         */
        channel_id?: number;
    };
    meta?: Meta;
};

