import { FormField, Resource } from "./common";
export declare enum CustomerSort {
    DATE_CREATED_ASC = "date_created:asc",
    DATE_CREATED_DESC = "date_created:desc",
    LAST_NAME_ASC = "last_name:asc",
    LAST_NAME_DESC = "last_name:desc",
    DATE_MODIFIED_ASC = "date_modified:asc",
    DATE_MODIFIED_DESC = "date_modified:desc"
}
export interface Customer {
    id?: number;
    date_created?: string;
    date_modified?: string;
    _authentication?: Authentication;
    company?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    accepts_marketing?: boolean;
    addresses?: Resource;
    form_fields?: FormField[];
    reset_pass_on_login?: boolean;
}
export interface Authentication {
    force_reset?: boolean;
    password?: string;
    password_confirmation?: string;
}
export interface CustomerGroup {
    id?: number;
    name?: string;
    is_default?: boolean;
    category_access?: CategoryAccessLevel;
    discount_rules?: DiscountRule[];
    is_group_for_guests?: boolean;
}
export interface CategoryAccessLevel {
    type?: string;
    categories?: number[];
}
export interface DiscountRule {
    type?: string;
    method?: string;
    amount?: string;
    price_list_id?: number;
}
export interface CustomerAddress {
    id?: number;
    country_iso2?: string;
    customer_id?: number;
    first_name?: string;
    last_name?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
    address_type?: string;
}
export interface ValidatePasswordResponse {
    success: boolean;
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
