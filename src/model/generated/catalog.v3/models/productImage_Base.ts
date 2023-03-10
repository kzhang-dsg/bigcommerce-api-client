/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Common ProductImage properties.
 */
export type productImage_Base = {
    /**
     * The local path to the original image file uploaded to BigCommerce. Limit of 1MB per file.
     *
     */
    image_file?: string;
    /**
     * Flag for identifying whether the image is used as the product's thumbnail.
     *
     */
    is_thumbnail?: boolean;
    /**
     * The order in which the image will be displayed on the product page. Higher integers give the image a lower priority. When updating, if the image is given a lower priority, all images with a `sort_order` the same as or greater than the image's new `sort_order` value will have their `sort_order`s reordered.
     *
     */
    sort_order?: number;
    /**
     * The description for the image.
     *
     */
    description?: string;
    /**
     * Must be a fully qualified URL path, including protocol. Limit of 8MB per file.
     */
    image_url?: string;
};

