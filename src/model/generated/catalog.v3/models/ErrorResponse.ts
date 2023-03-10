/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetaData } from './MetaData';
import type { MetaError } from './MetaError';

export type ErrorResponse = {
    errors?: MetaError;
    meta?: MetaData;
};

