/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Order } from './Order';

/**
 * Response data container for Order endpoints (`POST /order` and `POST /order/{orderId}`).
 */
export type Data = {
    order?: Order;
};

