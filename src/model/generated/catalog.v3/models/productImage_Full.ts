/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productImage_Base } from './productImage_Base';

/**
 * Common ProductImage properties.
 */
export type productImage_Full = (productImage_Base & {
    /**
     * The unique numeric ID of the image; increments sequentially.
     *
     */
    id?: number;
    /**
     * The unique numeric identifier for the product with which the image is associated.
     *
     */
    product_id?: number;
    /**
     * The zoom URL for this image. By default, this is used as the zoom image on product pages when zoom images are enabled.
     *
     */
    url_zoom?: string;
    /**
     * The standard URL for this image. By default, this is used for product-page images.
     *
     */
    url_standard?: string;
    /**
     * The thumbnail URL for this image. By default, this is the image size used on the category page and in side panels.
     *
     */
    url_thumbnail?: string;
    /**
     * The tiny URL for this image. By default, this is the image size used for thumbnails beneath the product image on a product page.
     *
     */
    url_tiny?: string;
    /**
     * The date on which the product image was modified.
     *
     */
    date_modified?: Date;
});

