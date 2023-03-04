import { FieldAwareQueryParams, IdAwareQueryParams } from "./common";

export enum PermissionSet {
    APP_ONLY = "app_only",
    READ = "read",
    WRITE = "write",
    READ_AND_SF_ACCESS = "read_and_sf_access",
    WRITE_AND_SF_ACCESS = "write_and_sf_access",
}
export enum ResourceType {
    CATEGORY = "category",
    BRAND = "brand",
    PRODUCT = "product",
    VARIANT = "variant",
}

export interface Metafield {
    id?: number;
    key: string;
    value: string;
    namespace: string;
    permission_set: PermissionSet;
    description?: string;
    resource_type?: ResourceType;
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
}

export interface GetAllMetafieldsParams
    extends FieldAwareQueryParams,
        IdAwareQueryParams {
    key?: string;
    namespace?: string;
}
