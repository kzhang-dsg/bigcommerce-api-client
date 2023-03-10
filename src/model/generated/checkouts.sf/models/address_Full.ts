/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address_Base } from './address_Base';

export type address_Full = (address_Base & {
    id?: string;
    /**
     * Indicates whether we should add this address to the customer address book.
     */
    shouldSaveAddress?: boolean;
});

