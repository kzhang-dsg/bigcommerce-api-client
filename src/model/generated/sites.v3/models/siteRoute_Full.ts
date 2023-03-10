/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { siteRoute_Base } from './siteRoute_Base';

/**
 * Route object used in responses.
 */
export type siteRoute_Full = ({
    /**
     * Unique ID for this route. Required when updating an existing route.
     */
    id?: number;
} & siteRoute_Base);

