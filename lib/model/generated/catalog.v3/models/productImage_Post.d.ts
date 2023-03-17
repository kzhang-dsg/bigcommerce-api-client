/**
 * The model for a POST to create an image on a product.
 */
export type productImage_Post = ({
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
     * The local path to the original image file uploaded to BigCommerce.
     *
     */
    image_file?: string;
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
} & {
    /**
     * Must be a fully qualified URL path, including protocol. Limit of 8MB per file.
     *
     */
    image_url?: string;
    /**
     * Must be sent as a multipart/form-data field in the request body.
     *
     */
    image_file?: string;
});
