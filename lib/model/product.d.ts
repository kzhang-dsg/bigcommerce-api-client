import { CustomUrl, FieldAwareQueryParams, IdAwareQueryParams } from "./common";
export declare enum ProductBuckPricingRuleType {
    PRICE = "price",
    PERCENT = "percent",
    FIXED = "fixed"
}
export declare enum ProductModifierType {
    DATE = "date",
    CHECKBOX = "checkbox",
    FILE = "file",
    TEXT = "text",
    MULTI_LINE_TEXT = "multi_line_text",
    NUMBERS_ONLY_TEXT = "numbers_only_text",
    RADIO_BUTTONS = "radio_buttons",
    RECTANGLES = "rectangles",
    DROPDOWN = "dropdown",
    PRODUCT_LIST = "product_list",
    PRODUCT_LIST_WITH_IMAGES = "product_list_with_images",
    SWATCH = "swatch"
}
export declare enum DateLimitMode {
    EARLIEST = "earliest",
    RANGE = "range",
    LATEST = "latest"
}
export declare enum FileTypesMode {
    SPECIFIC = "specific",
    ALL = "all"
}
export declare enum NumberLimitMode {
    LOWEST = "lowest",
    RANGE = "range",
    HIGHEST = "highest"
}
export declare enum ProductListShippingCalc {
    NONE = "none",
    WEIGHT = "weight",
    PACKAGE = "package"
}
export declare enum ProductReviewStatus {
    PENDING = 0,
    APPROVED = 1
}
export interface Product {
    id?: number;
    name?: string;
    type?: string;
    sku?: string;
    description?: string;
    weight?: number;
    width?: number;
    depth?: number;
    height?: number;
    price: number;
    cost_price?: number;
    retail_price?: number;
    sale_price?: number;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: number[];
    brand_id?: number;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: string;
    fixed_cost_shipping_price?: number;
    is_free_shipping?: boolean;
    is_visible?: boolean;
    is_featured?: boolean;
    related_products?: number[];
    warranty?: string;
    bin_picking_number?: string;
    layout_file?: string;
    upc?: string;
    search_keywords?: string;
    availability_description?: string;
    availability?: string;
    gift_wrapping_options_type?: string;
    gift_wrapping_options_list?: number[];
    sort_order?: number;
    condition?: string;
    is_condition_shown?: boolean;
    order_quantity_minimum?: number;
    order_quantity_maximum?: number;
    page_title?: string;
    meta_keywords?: string[];
    meta_description?: string;
    view_count?: number;
    preorder_release_date?: string;
    preorder_message?: string;
    is_preorder_only?: boolean;
    is_price_hidden?: boolean;
    price_hidden_label?: string;
    custom_url?: CustomUrl;
    open_graph_type?: string;
    open_graph_title?: string;
    open_graph_description?: string;
    open_graph_use_meta_description?: boolean;
    open_graph_use_product_name?: boolean;
    open_graph_use_image?: boolean;
    brand_name?: string;
    gtin?: string;
    mpn?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: ProductCustomField[];
    bulk_pricing_rules?: ProductBuckPricingRule[];
    images?: ProductImage[];
    videos?: ProductVideo[];
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: number;
    options?: ProductOption[];
    modifiers?: ProductModifier[];
    option_set_id?: number;
    option_set_display?: string;
    variants?: ProductVariant[];
}
export interface ProductCustomField {
    id?: number;
    name?: string;
    value?: string;
}
export interface ProductBuckPricingRule {
    id?: number;
    quantity_min?: number;
    quantity_max?: number;
    type?: ProductBuckPricingRuleType;
    amount?: number;
}
export interface ProductImage {
    image_file?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_url?: string;
    id?: number;
    product_id?: number;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
    date_modified?: string;
}
export interface ProductVideo {
    title?: string;
    description?: string;
    sort_order?: number;
    type?: string;
    video_id?: string;
    id?: number;
    product_id?: number;
    length?: string;
}
export interface ProductOption {
    id?: number;
    product_id?: number;
    display_name?: string;
    type?: string;
    config?: ProductOptionConfig;
    sort_order?: number;
    option_values?: ProductOptionOptionValue;
}
export interface ProductOptionConfig {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: string;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: string;
    file_types_supported?: string[];
    file_types_other?: string[];
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: string;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: string;
}
export interface ProductOptionOptionValue {
    is_default?: boolean;
    label?: string;
    sort_order?: number;
    value_data?: any;
    id?: number;
}
export interface ProductModifier {
    type?: ProductModifierType;
    required?: boolean;
    sort_order?: number;
    config?: Config;
    display_name?: string;
    id?: number;
    product_id?: number;
    name?: string;
    option_values?: ProductModifierOptionValue[];
}
export interface Config {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: DateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: FileTypesMode;
    file_types_supported?: string[];
    file_types_other?: string[];
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: NumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: ProductListShippingCalc;
}
export interface ProductModifierOptionValue {
    is_default?: boolean;
    label?: string;
    sort_order?: number;
    value_data?: object;
    adjusters?: Adjusters;
    id?: number;
    option_id?: number;
}
export interface Adjusters {
    price?: Adjuster;
    weight?: Adjuster;
    image_url?: string;
    purchasing_disabled?: PurchasingDisabled;
}
export interface Adjuster {
    adjuster?: string;
    adjuster_value?: number;
}
export interface PurchasingDisabled {
    status?: boolean;
    message?: string;
}
export interface ProductVariant {
    cost_price?: number;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    weight?: number;
    width?: number;
    height?: number;
    depth?: number;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: number;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    upc?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    bin_picking_number?: string;
    mpn?: string;
    gtin?: string;
    id?: number;
    product_id?: number;
    sku?: string;
    sku_id?: number;
    option_values?: ProductVariantOptionValue[];
    calculated_price?: number;
    calculated_weight?: number;
}
export interface ProductVariantOptionValue {
    option_display_name?: string;
    label?: string;
    id?: number;
    option_id?: number;
}
export interface ProductComplexRule {
    id?: number;
    product_id?: number;
    sort_order?: number;
    enabled?: boolean;
    stop?: boolean;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    purchasing_hidden?: boolean;
    image_url?: string;
    price_adjuster?: Adjuster;
    weight_adjuster?: Adjuster;
    conditions?: ProductComplexRuleCondition[];
}
export interface ProductComplexRuleCondition {
    id?: number;
    rule_id?: number;
    modifier_id?: number;
    modifier_value_id?: number;
    variant_id?: number;
    combination_id?: number;
}
export interface ProductReview {
    title?: string;
    text?: string;
    status?: string;
    rating?: number;
    email?: string;
    name?: string;
    date_reviewed?: string;
    id?: number;
    product_id?: number;
    date_created?: string;
    date_modified?: string;
}
export interface ProductChannelAssignment {
    product_id?: number;
    channel_id?: number;
}
export interface ProductCategoryAssignment {
    product_id?: number;
    category_id?: number;
}
export interface ProductsQueryParams extends FieldAwareQueryParams, IdAwareQueryParams {
    availability?: string;
    brand_id?: number;
    categories?: number;
    "categories:in"?: number;
    condition?: string;
    date_last_imported?: string;
    "date_last_imported:max"?: string;
    "date_last_imported:min"?: string;
    date_modified?: string;
    "date_modified:max"?: string;
    "date_modified:min"?: string;
    direction?: string;
    include?: string;
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
    include_fields?: string;
}
export interface DeleteProductsQueryParams {
    "id:in": string;
    brand_id?: number;
    categories?: number;
    condition?: string;
    date_last_imported?: string;
    date_modified?: string;
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
export interface GetProductQueryParams extends FieldAwareQueryParams {
    include?: string;
}
export interface ProductReviewsQueryParams extends FieldAwareQueryParams {
    status?: ProductReviewStatus;
}
export interface ProductChannelAssignmentsQueryParams {
    "channel_id:in"?: string;
    "product_id:in"?: string;
}
export interface ProductCategoryAssignmentsQueryParams {
    "category_id:in"?: string;
    "product_id:in"?: string;
}
