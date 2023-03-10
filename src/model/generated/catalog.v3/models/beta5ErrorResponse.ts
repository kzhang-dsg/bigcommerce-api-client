/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseError } from './BaseError';
import type { beta5DetailedErrors } from './beta5DetailedErrors';

export type beta5ErrorResponse = (BaseError & {
    errors?: beta5DetailedErrors;
});

