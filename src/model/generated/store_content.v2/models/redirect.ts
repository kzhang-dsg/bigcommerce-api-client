/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { forward } from './forward';

export type redirect = {
    /**
     * Numeric ID of the redirect.
     */
    id?: number;
    /**
     * The path from which to redirect.
     */
    path: string;
    forward: forward;
    /**
     * URL of the redirect. READ-ONLY
     */
    url?: string;
};

