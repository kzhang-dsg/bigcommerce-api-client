/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseError } from './BaseError';

export type betaErrorResponse = (BaseError & {
    errors?: any;
});

