/**
 * Used to reflect parent <> child category relationships. Used by Category Tree.
 */
export type categoriesTreeNode_Full = {
    /**
     * The unique numeric ID of the category; increments sequentially.
     *
     */
    id?: number;
    /**
     * The unique numeric ID of the category's parent. This field controls where the category sits in the tree of categories that organize the catalog.
     *
     */
    parent_id?: number;
    /**
     * The name displayed for the category. Name is unique with respect to the category's siblings.
     *
     */
    name?: string;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view.
     *
     */
    is_visible?: boolean;
    /**
     * The custom URL for the category on the storefront.
     *
     */
    url?: string;
};
