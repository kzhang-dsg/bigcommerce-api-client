/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseError } from './BaseError';
import type { beta4DetailedErrors } from './beta4DetailedErrors';

export type beta4ErrorResponse = (BaseError & {
    errors?: beta4DetailedErrors;
});

