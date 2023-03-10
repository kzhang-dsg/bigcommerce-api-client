/**
 * A storefront filter for product brand
 */
export type EnabledBrandFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: EnabledBrandFilter.items_to_show;
    sort_by?: EnabledBrandFilter.sort_by;
    type?: EnabledBrandFilter.type;
};
export declare namespace EnabledBrandFilter {
    enum items_to_show {
        '_5' = 5,
        '_10' = 10,
        '_15' = 15
    }
    enum sort_by {
        ALPHA = "alpha",
        ITEM_COUNT = "item_count"
    }
    enum type {
        BRAND = "brand"
    }
}
