export type categoryAccessLevel_Full = {
    /**
     * + `all` - Customers can access all categories
     * + `specific`  - Customers can access a specific list of categories
     * + `none` - Customers are prevented from viewing any of the categories in this group.
     */
    type?: categoryAccessLevel_Full.type;
    /**
     * Is an array of category IDs and should be supplied only if `type` is specific.
     */
    categories?: Array<number>;
};
export declare namespace categoryAccessLevel_Full {
    /**
     * + `all` - Customers can access all categories
     * + `specific`  - Customers can access a specific list of categories
     * + `none` - Customers are prevented from viewing any of the categories in this group.
     */
    enum type {
        ALL = "all",
        SPECIFIC = "specific",
        NONE = "none"
    }
}
