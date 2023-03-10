/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { error_Base } from './error_Base';

export type ErrorResponse = (error_Base & {
    errors?: Record<string, string>;
});

