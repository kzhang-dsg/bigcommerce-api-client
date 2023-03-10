/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { currency_Base } from './currency_Base';

export type currency_Full = (currency_Base & {
    /**
     * Id of the currency. READ-ONLY.
     */
    id?: number;
    /**
     * Date the currency was last updated, created or modified.
     */
    last_updated?: string;
});

