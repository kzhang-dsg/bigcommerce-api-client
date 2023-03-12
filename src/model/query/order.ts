export interface OrdersQueryParams {
    min_id?: number;
    max_id?: number;
    min_total?: number;
    max_total?: number;
    customer_id?: number;
    email?: string;
    status_id?: number;
    cart_id?: number;
    payment_method?: string;
    min_date_created?: string;
    max_date_created?: string;
    min_date_modified?: string;
    max_date_modified?: string;
    sort?: string;
    is_deleted?: boolean;
    channel_id?: number;
}

export interface OrderMessagesQueryParams {
    min_id?: number;
    max_id?: number;
    customer_id?: number;
    min_date_created?: string;
    max_date_created?: string;
    is_flagged?: boolean;
    status?: string;
}

export interface OrderTaxesQueryParams {
    details?: boolean;
}
