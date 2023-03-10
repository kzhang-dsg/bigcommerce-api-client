/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Category } from './Category';
import type { MetaData } from './MetaData';

export type PartialSuccessResponse = {
    data?: Array<Category>;
    meta?: MetaData;
};

