/**
 * Catalog Summary object describes a lightweight summary of the catalog.
 */
export type catalogSummary_Full = {
    /**
     * A count of all inventory items in the catalog.
     *
     */
    inventory_count?: number;
    /**
     * Total value of store's inventory.
     *
     */
    inventory_value?: number;
    /**
     * ID of the category containing the most products.
     *
     */
    primary_category_id?: number;
    /**
     * Name of the category containing the most products.
     *
     */
    primary_category_name?: string;
    /**
     * Total number of variants
     */
    variant_count?: number;
    /**
     * Highest priced variant
     */
    highest_variant_price?: number;
    /**
     * Average price of all variants
     */
    average_variant_price?: number;
    /**
     * Lowest priced variant in the store
     */
    lowest_variant_price?: string;
    oldest_variant_date?: string;
    newest_variant_date?: string;
};
