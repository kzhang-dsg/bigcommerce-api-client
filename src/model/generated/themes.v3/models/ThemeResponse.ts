/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionMeta } from './CollectionMeta';
import type { Theme } from './Theme';

/**
 * Response payload for the BigCommerce API.
 *
 */
export type ThemeResponse = {
    data?: Theme;
    meta?: CollectionMeta;
};

