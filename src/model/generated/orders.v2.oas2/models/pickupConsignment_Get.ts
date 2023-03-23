/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pickupConsignment_Base } from './pickupConsignment_Base';
import type { pickupConsignmentLocation_Get } from './pickupConsignmentLocation_Get';
import type { products_Resource } from './products_Resource';

export type pickupConsignment_Get = ({
    /**
     * The ID of the pickup consignment to update.
     */
    id?: number;
    /**
     * ID of the pickup method.
     */
    pickup_method_id?: number;
} & pickupConsignment_Base & {
    location?: pickupConsignmentLocation_Get;
    line_items?: Array<products_Resource>;
});

