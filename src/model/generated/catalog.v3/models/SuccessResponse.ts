/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';
import type { MetaData } from './MetaData';
import type { MetaError } from './MetaError';

export type SuccessResponse = {
    data?: Array<Category>;
    errors?: MetaError;
    meta?: MetaData;
};

