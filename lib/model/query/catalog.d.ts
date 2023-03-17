import { FieldAwareQueryParams, IdAwareQueryParams } from "../common";
export declare enum ProductReviewStatus {
    PENDING = 0,
    APPROVED = 1
}
export interface BrandsQueryParams extends FieldAwareQueryParams, IdAwareQueryParams {
    name?: string;
    page_title?: string;
}
export interface DeleteBrandsQueryParams {
    name?: string;
    page_title?: string;
}
export interface CategoriesQueryParams extends FieldAwareQueryParams, IdAwareQueryParams {
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
    "category_id:in"?: number[];
    "category_id:not_in"?: number[];
    "category_uuid:in"?: string[];
    "category_uuid:not_in"?: string[];
    is_visible?: boolean;
    keyword?: string;
    name?: string;
    "name:like"?: string;
    page_title?: string;
    "page_title:like"?: string;
    "parent_id:in"?: number[];
    "parent_id:not_in"?: number[];
    "tree_id:in"?: number[];
    "tree_id:not_in"?: number[];
}
export interface DeleteCategoriesBatchQueryParams {
    "category_id:in"?: number[];
    "category_uuid:in"?: number[];
    "parent_id:in"?: number[];
    "tree_id:in"?: number[];
}
export interface ProductsQueryParams extends FieldAwareQueryParams, IdAwareQueryParams {
    availability?: string;
    brand_id?: number;
    categories?: number[];
    "categories:in"?: number[];
    condition?: string;
    date_last_imported?: Date;
    "date_last_imported:max"?: Date;
    "date_last_imported:min"?: Date;
    date_modified?: Date;
    "date_modified:max"?: Date;
    "date_modified:min"?: Date;
    direction?: string;
    include?: string[];
    inventory_level?: number;
    "inventory_level:greater"?: number;
    "inventory_level:in"?: number;
    "inventory_level:less"?: number;
    "inventory_level:max"?: number;
    "inventory_level:min"?: number;
    "inventory_level:not_in"?: number;
    inventory_low?: number;
    is_featured?: number;
    is_free_shipping?: number;
    is_visible?: boolean;
    keyword?: string;
    keyword_context?: string;
    name?: string;
    out_of_stock?: number;
    price?: number;
    sku?: string;
    "sku:in"?: string[];
    sort?: string;
    status?: number;
    total_sold?: number;
    type?: string;
    upc?: string;
    weight?: number;
}
export interface UpdateProductsQueryParams {
    include_fields?: string[];
}
export interface DeleteProductsQueryParams {
    "id:in": number[];
    brand_id?: number;
    categories?: number[];
    condition?: string;
    date_last_imported?: Date;
    date_modified?: Date;
    inventory_level?: number;
    is_featured?: number;
    is_visible?: boolean;
    keyword?: string;
    name?: string;
    price?: number;
    sku?: string;
    total_sold?: number;
    type?: string;
    weight?: number;
}
export interface ProductReviewsQueryParams extends FieldAwareQueryParams {
    status?: ProductReviewStatus;
}
export interface ProductChannelAssignmentsQueryParams {
    "channel_id:in"?: number[];
    "product_id:in"?: number[];
}
export interface ProductCategoryAssignmentsQueryParams {
    "category_id:in"?: number[];
    "product_id:in"?: number[];
}
export interface VariantsQueryParams extends FieldAwareQueryParams {
    id?: number;
    product_id?: string;
    sku?: string;
}
export interface CategoryTreesQueryParams {
    "channel_id:in"?: number[];
    "id:in"?: number[];
}
export interface DeleteCategoryTreesQueryParams {
    "id:in"?: number[];
}
export interface GetCategoryTreeQueryParams {
    depth?: number;
}
