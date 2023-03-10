/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CartSettings } from './CartSettings';
import type { metaCollection_open } from './metaCollection_open';

/**
 * The response object of cart settings at the global level.
 */
export type GlobalCartSettingsResponse = {
    data?: CartSettings;
    meta?: metaCollection_open;
};

