/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionMeta } from './CollectionMeta';
import type { script_Full } from './script_Full';

/**
 * For a list of all locations visit [Scripts Visibility](/api-docs/store-management/scripts#script-visibility-locations).
 */
export type script_responseCollection = {
    data?: Array<script_Full>;
    meta?: CollectionMeta;
};

