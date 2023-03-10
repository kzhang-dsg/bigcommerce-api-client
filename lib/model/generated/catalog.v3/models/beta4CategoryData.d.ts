import type { CustomUrl } from './CustomUrl';
export type beta4CategoryData = {
    tree_id?: number;
    parent_id?: number;
    name?: string;
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    search_keywords?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    layout_file?: string;
    is_visible?: boolean;
    default_product_sort?: string;
    image_url?: string;
    custom_url?: CustomUrl;
};
