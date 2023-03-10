/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DetailedErrors } from './DetailedErrors';
import type { error_Base } from './error_Base';

export type errorResponse_Full = (error_Base & {
    errors?: DetailedErrors;
});

