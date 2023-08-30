import { RedisClientOptions } from "redis";

export enum OrderStatus {
    INCOMPLETE = 0,
    PENDING = 1,
    SHIPPED = 2,
    PARTIALLY_SHIPPED = 3,
    REFUNDED = 4,
    CANCELLED = 5,
    DECLINED = 6,
    AWAITING_PAYMENT = 7,
    AWAITING_PICKUP = 8,
    AWAITING_SHIPMENT = 9,
    COMPLETED = 10,
    AWAITING_FULFILLMENT = 11,
    MANUAL_VERIFICATION_REQUIRED = 12,
    DISPUTED = 13,
    PARTIALLY_REFUNDED = 14,
}

export enum Limit {
    ALL = -1,
    DEFAULT = 0,
    MAX_LIMIT = 250,
    BATCH_MAX_LIMIT = 10,
}

export enum Sort {
    USE_STORE_SETTINGS = "use_store_settings",
    FEATURED = "featured",
    NEWEST = "newest",
    BEST_SELLING = "best_selling",
    ALPHA_ASC = "alpha_asc",
    ALPHA_DESC = "alpha_desc",
    AVG_CUSTOMER_REVIEW = "avg_customer_review",
    PRICE_ASC = "price_asc",
    PRICE_DESC = "price_desc",
}

export enum CacheType {
    IN_MEMORY,
    REDIS,
}

export enum DateFormat {
    ISO8601,
    UNIX_TIMESTAMP,
}

export interface Config {
    storeHash: string;
    accessToken: string;
    defaultLimit?: number;
    timeout?: number;
    maxRetries?: number;
    retryDelay?: number;
    retryOnReadTimeout?: boolean;
    failOn404?: boolean;
    cache?: CacheConfig;
}

export type CacheConfig = {
    enable?: boolean;
    ttl?: number;
    cloneData?: boolean;
    type?: CacheType;
    redisClientOptions?: RedisClientOptions;
    cacheKeyPrefix?: string;
};

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

export interface Count {
    count: number;
}

export interface FieldAwareQueryParams {
    exclude_fields?: string[];
    include_fields?: string[];
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

export interface IdInQueryParams {
    "id:in"?: number[];
}

export interface ChannelIdQueryParams {
    channel_id?: number;
}

export interface IncludeQueryParams {
    include?: string[];
}
