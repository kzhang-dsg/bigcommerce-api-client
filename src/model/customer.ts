import { FormField, Resource } from "./common";

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

export interface CustomersQueryParams {
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

export interface CustomerGroupsQueryParams {
    is_default?: boolean;
    is_group_for_guests?: boolean;
    name?: string;
}
