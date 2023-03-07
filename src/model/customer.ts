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
