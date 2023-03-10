export type AvailablePriceFilter = {
    id?: string;
    name?: string;
    price_range_max?: number;
    price_range_min?: number;
    type?: AvailablePriceFilter.type;
};
export declare namespace AvailablePriceFilter {
    enum type {
        PRICE = "price"
    }
}
