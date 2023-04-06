/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status_Full } from './Status_Full';

export type StatusUpdate_Full = {
    /**
     * The ID of the return for which the status should be updated.
     */
    return_id?: number;
    new_status?: Status_Full;
};

