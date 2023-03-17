export interface SubscribersQueryParams {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number;
    date_created?: Date;
    date_modified?: Date;
    id?: number;
}
export interface DeleteSubscribersQueryParams {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number;
    date_created?: Date;
    date_modified?: Date;
}
