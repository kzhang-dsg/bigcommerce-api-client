/**
 * A filter based on the product’s price, shown as a price range on the storefront.
 */
export type EnabledPriceFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: EnabledPriceFilter.type;
};
export declare namespace EnabledPriceFilter {
    enum type {
        PRICE = "price"
    }
}
