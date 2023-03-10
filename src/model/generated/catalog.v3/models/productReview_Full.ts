/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productReview_Base } from './productReview_Base';

/**
 * A product review model.
 *
 */
export type productReview_Full = (productReview_Base & {
    /**
     * The unique numeric ID of the product review; increments sequentially.
     *
     */
    id?: number;
    /**
     * The unique numeric identifier for the product with which the review is associated.
     *
     */
    product_id?: number;
    /**
     * Date the product review was created.
     *
     */
    date_created?: string;
    /**
     * Date the product review was modified.
     *
     */
    date_modified?: string;
});

