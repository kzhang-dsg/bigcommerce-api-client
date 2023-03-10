export type AvailableNormalFilter = {
    id?: string;
    name?: string;
    product_count?: number;
    type?: AvailableNormalFilter.type;
};
export declare namespace AvailableNormalFilter {
    enum type {
        CATEGORY = "category",
        BRAND = "brand",
        RATING = "rating",
        PRODUCT = "product"
    }
}
