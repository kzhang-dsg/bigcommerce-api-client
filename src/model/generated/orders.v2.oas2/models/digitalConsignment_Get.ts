/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { products_Resource } from './products_Resource';

export type digitalConsignment_Get = {
    /**
     * The recipient email of the digital consignment.
     */
    recipient_email?: string;
    line_items?: Array<products_Resource>;
};

