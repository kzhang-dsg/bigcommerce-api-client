/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status_Full } from './Status_Full';

export type UpdateReturnStatuses = Array<{
    /**
     * The ID of the return for which the status was updated
     */
    id?: number;
    status?: Status_Full;
}>;
