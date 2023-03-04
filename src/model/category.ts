import {
    CustomUrl,
    FieldAwareQueryParams,
    IdAwareQueryParams,
    Sort,
    Url,
} from "./common";

export interface Category {
    id?: number;
    tree_id?: number;
    parent_id: number;
    name: string;
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    meta_keywords?: string[];
    meta_description?: string;
    layout_file?: string;
    image_url?: string;
    is_visible?: boolean;
    search_keywords?: string;
    default_product_sort?: Sort;
    custom_url?: CustomUrl;
    url?: Url;
}

export interface CategoriesQueryParams
    extends FieldAwareQueryParams,
        IdAwareQueryParams {
    is_visible?: boolean;
    keyword?: string;
    name?: string;
    "name:like"?: string[];
    page_title?: string;
    "page_title:like"?: string;
    parent_id?: number;
    "parent_id:greater"?: number[];
    "parent_id:in"?: number[];
    "parent_id:less"?: number[];
    "parent_id:max"?: number[];
    "parent_id:min"?: number[];
}

export interface CategoriesBatchQueryParams extends FieldAwareQueryParams {
    "category_id:in"?: string;
    "category_id:not_in"?: string;
    "category_uuid:in"?: string;
    "category_uuid:not_in"?: string;
    is_visible?: boolean;
    keyword?: string;
    name?: string;
    "name:like"?: string;
    page_title?: string;
    "page_title:like"?: string;
    "parent_id:in"?: string;
    "parent_id:not_in"?: string;
    "tree_id:in"?: string;
    "tree_id:not_in"?: string;
}

export interface DeleteCategoriesBatchQueryParams {
    "category_id:in"?: string;
    "category_uuid:in"?: string;
    "parent_id:in"?: string;
    "tree_id:in"?: string;
}
