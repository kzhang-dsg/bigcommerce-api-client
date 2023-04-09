import { IdInQueryParams } from "./../common";

export enum CustomerSort {
    DATE_CREATED_ASC = "date_created:asc",
    DATE_CREATED_DESC = "date_created:desc",
    LAST_NAME_ASC = "last_name:asc",
    LAST_NAME_DESC = "last_name:desc",
    DATE_MODIFIED_ASC = "date_modified:asc",
    DATE_MODIFIED_DESC = "date_modified:desc",
}

export interface CustomersV2QueryParams {
    company?: string;
    customer_group_id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    max_date_created?: Date;
    max_date_modified?: Date;
    max_id?: number;
    min_date_created?: Date;
    min_date_modified?: Date;
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

export interface CustomersV3QueryParams extends IdInQueryParams {
    "company:in"?: number[];
    "customer_group_id:in"?: number[];
    date_created?: Date;
    "date_created:max"?: Date;
    "date_created:min"?: Date;
    date_modified?: Date;
    "date_modified:min"?: Date;
    "date_modified:max"?: Date;
    "email:in"?: string;
    "name:in"?: string[];
    "name:like"?: string[];
    "registration_ip_address:in"?: string[];
    include?: string[];
    sort?: CustomerSort;
}

export interface CustomersV3AddressesQueryParams extends IdInQueryParams {
    "company:in"?: string[];
    "name:in"?: string[];
    "customer_id:in"?: number[];
    include?: string[];
}

export interface CustomersV3AttributeValuesQueryParams {
    "customer_id:in"?: number[];
    "attribute_id:in"?: number[];
    name?: string;
    date_created?: Date;
    "date_created:max"?: Date;
    "date_created:min"?: Date;
    date_modified?: Date;
    "date_modified:max"?: Date;
    "date_modified:min"?: Date;
}

export interface CustomersV3AttributesQueryParams {
    name?: string;
    "name:like"?: string;
    type?: string;
    date_created?: Date;
    "date_created:max"?: Date;
    "date_created:min"?: Date;
    date_modified?: Date;
    "date_modified:max"?: Date;
    "date_modified:min"?: Date;
}

export interface CustomersV3FormFieldValuesQueryParams {
    customer_id?: number;
    address_id?: number;
    field_name?: string;
    field_type?: string;
}
