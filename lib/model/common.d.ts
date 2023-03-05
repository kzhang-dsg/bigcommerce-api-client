export declare enum Limit {
    ALL = -1,
    MAX_LIMIT = 250
}
export declare enum Sort {
    USE_STORE_SETTINGS = "use_store_settings",
    FEATURED = "featured",
    NEWEST = "newest",
    BEST_SELLING = "best_selling",
    ALPHA_ASC = "alpha_asc",
    ALPHA_DESC = "alpha_desc",
    AVG_CUSTOMER_REVIEW = "avg_customer_review",
    PRICE_ASC = "price_asc",
    PRICE_DESC = "price_desc"
}
export interface Config {
    storeHash: string;
    accessToken: string;
    timeout?: number;
    maxRetries?: number;
    retryDelay?: number;
    retryOnReadTimeout?: boolean;
    failOn404?: boolean;
}
export interface PaginatedData<Type> {
    data?: Type[];
    meta: Meta;
    errors?: Error[];
}
export interface Data<Type> {
    data: Type;
    meta: Meta;
}
export interface Meta {
    pagination?: Pagination;
    total?: number;
    success?: number;
    failed?: number;
}
export interface Pagination {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
        current: string;
    };
}
export interface Error {
    status: number;
    title: string;
    type: string;
    errors?: any;
}
export interface FieldAwareQueryParams {
    exclude_fields?: string;
    include_fields?: string;
}
export interface IdAwareQueryParams {
    id?: number;
    "id:greater"?: number[];
    "id:in"?: number[];
    "id:less"?: number[];
    "id:max"?: number[];
    "id:min"?: number[];
    "id:not_in"?: number[];
}
export interface Url {
    path?: string;
    is_customized?: boolean;
}
export interface CustomUrl {
    url?: string;
    is_customized?: boolean;
}
export interface Image {
    image_url: string;
}
export interface ProductSortOrder {
    product_id: number;
    sort_order: number;
}
