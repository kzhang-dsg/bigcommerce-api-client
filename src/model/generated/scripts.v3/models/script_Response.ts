/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { script_Full } from './script_Full';

/**
 * For a list of all locations visit [Scripts Visibility](/api-docs/store-management/scripts#script-visibility-locations).
 */
export type script_Response = {
    data?: script_Full;
    meta?: Meta;
};

