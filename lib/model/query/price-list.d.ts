export interface PriceListsQueryParams {
    id?: number;
    name?: string;
    date_created?: string;
    date_modified?: string;
    "id:in"?: number[];
    "name:like"?: string[];
    "date_created:max"?: string;
    "date_created:min"?: string;
    "date_modified:max"?: string;
    "date_modified:min"?: string;
}
export interface DeleteAllPriceListsQueryParams {
    id?: number;
    name?: string;
}
export interface GetPriceListQueryParams {
    id?: number;
    name?: string;
    date_created?: string;
    date_modified?: string;
}
export interface PriceListAssignmentsQueryParams {
    id?: number;
    price_list_id?: number;
    customer_group_id?: number;
    channel_id?: number;
    "id:in"?: number[];
    "customer_group_id:in"?: number[];
    "price_list_id:in"?: number[];
    "channel_id:in"?: number[];
}
export interface DeletePriceListAssignmentsQueryParams {
    id?: number;
    price_list_id?: number;
    customer_group_id?: number;
    channel_id?: number;
    "channel_id:in"?: string[];
}
export interface PriceListRecordsQueryParams {
    "variant_id:in"?: number[];
    "product_id:in"?: number[];
    currency?: string;
    include?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    calculated_price?: number;
    date_created?: string;
    date_modified?: string;
    sku?: string;
    "sku:in"?: string[];
    "currency:in"?: string[];
    "price:max"?: number;
    "price:min"?: number;
    "sale_price:max"?: number;
    "sale_price:min"?: number;
    "retail_price:max"?: number;
    "retail_price:min"?: number;
    "map_price:max"?: number;
    "map_price:min"?: number;
    "calculated_price:max"?: number;
    "calculated_price:min"?: number;
    "date_created:max"?: string;
    "date_created:min"?: string;
    "date_modified:max"?: string;
    "date_modified:min"?: string;
}
export interface DeletePriceListRecordsQueryParams {
    "variant_id:in"?: number[];
}
