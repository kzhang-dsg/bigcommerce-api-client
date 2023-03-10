/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RedirectTo } from './RedirectTo';

/**
 * Data necessary to create or update a redirect. If there’s a conflict on the from_path and site_id, the redirect will be overwritten with new data.
 */
export type RedirectUpsert = {
    from_path: string;
    site_id: number;
    to?: RedirectTo;
};

