/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productVideo_Base } from './productVideo_Base';

/**
 * A product video model.
 *
 */
export type productVideo_Full = (productVideo_Base & {
    /**
     * The unique numeric ID of the product video; increments sequentially.
     *
     */
    id?: number;
    /**
     * The unique numeric identifier for the product with which the image is associated.
     *
     */
    product_id?: number;
    /**
     * Length of the video. This will be filled in according to data on a host site.
     *
     */
    length?: string;
});

