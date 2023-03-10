export declare enum CustomerSort {
    DATE_CREATED_ASC = "date_created:asc",
    DATE_CREATED_DESC = "date_created:desc",
    LAST_NAME_ASC = "last_name:asc",
    LAST_NAME_DESC = "last_name:desc",
    DATE_MODIFIED_ASC = "date_modified:asc",
    DATE_MODIFIED_DESC = "date_modified:desc"
}
export interface CustomersV2QueryParams {
    company?: string;
    customer_group_id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    max_date_created?: string;
    max_date_modified?: string;
    max_id?: number;
    min_date_created?: string;
    min_date_modified?: string;
    min_id?: number;
    phone?: string;
    store_credit?: string;
    tax_exempt_category?: string;
}
export interface CustomerV2GroupsQueryParams {
    is_default?: boolean;
    is_group_for_guests?: boolean;
    name?: string;
}
export interface CustomersV3QueryParams {
    "id:in"?: number[];
    "company:in"?: number[];
    "customer_group_id:in"?: number[];
    date_created?: string;
    "date_created:max"?: string;
    "date_created:min"?: string;
    date_modified?: string;
    "date_modified:min"?: string;
    "date_modified:max"?: string;
    "email:in"?: string;
    "name:in"?: string[];
    "name:like"?: string[];
    "registration_ip_address:in"?: string[];
    include?: string[];
    sort?: CustomerSort;
}
export interface CustomersV3AddressesQueryParams {
    "company:in"?: string[];
    "name:in"?: string[];
    "customer_id:in"?: string[];
    include?: string;
    "id:in"?: string[];
}
export interface CustomersV3AttributeValuesQueryParams {
    "customer_id:in"?: string[];
    "attribute_id:in"?: string[];
    name?: string;
    date_created?: string;
    "date_created:max"?: string;
    "date_created:min"?: string;
    date_modified?: string;
    "date_modified:max"?: string;
    "date_modified:min"?: string;
}
