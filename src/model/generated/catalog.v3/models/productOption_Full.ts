/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productOption_Base } from './productOption_Base';

export type productOption_Full = (productOption_Base & {
    /**
     * The unique option name, auto-generated from the display name, a timestamp, and the product ID.
     *
     */
    name?: string;
});

