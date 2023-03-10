/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionMeta } from './CollectionMeta';
import type { Metafield } from './Metafield';

/**
 * Response payload for the BigCommerce API.
 *
 */
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};

