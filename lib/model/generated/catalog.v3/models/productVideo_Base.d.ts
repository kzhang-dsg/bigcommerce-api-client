/**
 * The model for a POST to create a video on a product.
 *
 */
export type productVideo_Base = {
    /**
     * The title for the video. If left blank, this will be filled in according to data on a host site.
     *
     */
    title?: string;
    /**
     * The description for the video. If left blank, this will be filled in according to data on a host site.
     *
     */
    description?: string;
    /**
     * The order in which the video will be displayed on the product page. Higher integers give the video a lower priority. When updating, if the video is given a lower priority, all videos with a `sort_order` the same as or greater than the video's new `sort_order` value will have their `sort_order`s reordered.
     *
     */
    sort_order?: number;
    /**
     * The video type (a short name of a host site).
     *
     */
    type?: productVideo_Base.type;
    /**
     * The ID of the video on a host site.
     */
    video_id?: string;
};
export declare namespace productVideo_Base {
    /**
     * The video type (a short name of a host site).
     *
     */
    enum type {
        YOUTUBE = "youtube"
    }
}
