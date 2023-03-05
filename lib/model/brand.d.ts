import { CustomUrl, FieldAwareQueryParams, IdAwareQueryParams } from "./common";
export interface Brand {
    id?: number;
    name: string;
    page_title?: string;
    meta_keywords?: string[];
    meta_description?: string;
    image_url?: string;
    search_keywords?: string;
    custom_url?: CustomUrl;
}
export interface BrandsQueryParams extends FieldAwareQueryParams, IdAwareQueryParams {
    name?: string;
    page_title?: string;
}
export interface DeleteBrandsQueryParams {
    name?: string;
    page_title?: string;
}
