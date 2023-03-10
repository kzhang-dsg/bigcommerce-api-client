/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { Metafield } from './Metafield';

/**
 * Response payload for the BigCommerce API.
 *
 */
export type MetafieldResponse = ({
    data?: Metafield;
} & Meta);

