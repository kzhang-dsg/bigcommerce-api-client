/**
 * A filter based on product review ratings.
 */
export type EnabledRatingFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: EnabledRatingFilter.type;
};
export declare namespace EnabledRatingFilter {
    enum type {
        RATING = "rating"
    }
}
