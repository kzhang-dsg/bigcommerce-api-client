export type banner_Base = {
    /**
     * Name of the banner.
     */
    name: string;
    /**
     * Contains the banner content. Returned as a string and includes HTML formatting.
     */
    content: string;
    /**
     * Page the Banner is located on.
     */
    page: banner_Base.page;
    /**
     * Location on the page.
     */
    location: banner_Base.location;
    /**
     * This specifies whether the banner should be visible during a specific date range.
     */
    date_type: banner_Base.date_type;
    /**
     * If the datetype is set as 'custom’, this field specifies the date when the banner should become visible on the storefront.
     */
    date_from?: Date;
    /**
     * If the datetype is set as 'custom’, this field specifies the date when the banner should stop being visible on the storefront.
     */
    date_to?: Date;
    /**
     * Integer value denoting whether or not the banner is visible on the storefront: 1 = visible; 0 = not visible
     */
    visible?: string;
};
export declare namespace banner_Base {
    /**
     * Page the Banner is located on.
     */
    enum page {
        HOME_PAGE = "home_page",
        CATEGORY_PAGE = "category_page",
        BRAND_PAGE = "brand_page",
        SEARCH_PAGE = "search_page"
    }
    /**
     * Location on the page.
     */
    enum location {
        TOP = "top",
        BOTTOM = "bottom"
    }
    /**
     * This specifies whether the banner should be visible during a specific date range.
     */
    enum date_type {
        ALWAYS = "always",
        CUSTOM = "custom"
    }
}
