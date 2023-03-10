export type placement_Base = {
    /**
     * The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`.
     */
    entity_id?: string;
    /**
     * The sort order to control the position of a content widget in a region.
     */
    sort_order?: number;
    /**
     * The name of the region in which to insert content widgets.
     */
    region?: string;
    /**
     * Sets the placement as either inactive or active.
     */
    status?: placement_Base.status;
};
export declare namespace placement_Base {
    /**
     * Sets the placement as either inactive or active.
     */
    enum status {
        INACTIVE = "inactive",
        ACTIVE = "active"
    }
}
