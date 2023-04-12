/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productImage_Base } from './productImage_Base';

/**
 * The model for a PUT to update applicable Product Image fields.
 */
export type productImage_Put = ({
    /**
     * The unique numeric identifier for the product with which the image is associated.
     *
     */
    product_id?: number;
    /**
     * The zoom URL for this image. By default, this is used as the zoom image on product pages when zoom images are enabled.
     *
     */
    readonly url_zoom?: string;
    /**
     * The standard URL for this image. By default, this is used for product-page images.
     *
     */
    readonly url_standard?: string;
    /**
     * The thumbnail URL for this image. By default, this is the image size used on the category page and in side panels.
     *
     */
    readonly url_thumbnail?: string;
    /**
     * The tiny URL for this image. By default, this is the image size used for thumbnails beneath the product image on a product page.
     *
     */
    readonly url_tiny?: string;
} & productImage_Base);

