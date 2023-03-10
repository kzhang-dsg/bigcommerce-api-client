/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateReturnRequestItem } from './CreateReturnRequestItem';

export type CreateReturnRequest = {
    /**
     * A collection of items to be returned
     */
    items: Array<CreateReturnRequestItem>;
    /**
     * A comment provided to the merchant for review
     */
    comment?: string;
};

