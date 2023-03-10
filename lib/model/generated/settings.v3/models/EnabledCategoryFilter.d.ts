/**
 * A storefront filter for product category
 */
export type EnabledCategoryFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: EnabledCategoryFilter.items_to_show;
    type?: EnabledCategoryFilter.type;
};
export declare namespace EnabledCategoryFilter {
    enum items_to_show {
        '_5' = 5,
        '_10' = 10,
        '_15' = 15
    }
    enum type {
        CATEGORY = "category"
    }
}
