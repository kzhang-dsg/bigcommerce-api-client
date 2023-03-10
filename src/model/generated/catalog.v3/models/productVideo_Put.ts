/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productVideo_Base } from './productVideo_Base';

/**
 * The model for a PUT to update a video on a product.
 *
 */
export type productVideo_Put = (productVideo_Base & {
    /**
     * The unique numeric ID of the product video; increments sequentially.
     *
     */
    id?: number;
});

