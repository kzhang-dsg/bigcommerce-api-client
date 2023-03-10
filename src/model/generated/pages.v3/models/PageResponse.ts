/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Page } from './Page';
import type { ResponseMeta } from './ResponseMeta';

/**
 * Response payload for the BigCommerce API.
 *
 */
export type PageResponse = {
    data?: Array<Page>;
    meta?: ResponseMeta;
};

