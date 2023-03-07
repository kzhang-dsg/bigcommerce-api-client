export interface Cart {
    id?: string;
    parent_id?: string;
    customer_id?: number;
    email?: string;
    currency?: Currency;
    tax_included?: boolean;
    base_amount?: number;
    discount_amount?: number;
    cart_amount?: number;
    coupons?: AppliedCoupon[];
    discounts?: AppliedDiscount[];
    line_items?: CartLineItems;
    created_time?: string;
    updated_time?: string;
    channel_id?: number;
    locale?: string;
    promotions?: Promotions;
}
export interface Currency {
    code?: string;
}
export interface AppliedCoupon {
    code?: string;
    id?: string;
    coupon_type?: string;
    discounted_amount?: number;
}
export interface AppliedDiscount {
    id?: string;
    discounted_amount?: number;
}
export interface CartLineItems {
    physical_items?: PhysicalLineItem[];
    digital_items?: DigitalLineItem[];
    gift_certificates?: GiftCertificate[];
    custom_items?: CustomLineItem[];
}
export interface PhysicalLineItem {
    id?: string;
    variant_id?: number;
    product_id?: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity?: number;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: AppliedDiscount[];
    coupons?: AppliedLineItemCoupons[];
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    options?: LineItemProductOption[];
    is_require_shipping?: boolean;
    gift_wrapping?: LineItemGiftWrapping;
}
export interface DigitalLineItem {
    id?: string;
    variant_id?: number;
    product_id?: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity?: number;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: AppliedDiscount[];
    coupons?: AppliedLineItemCoupons[];
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    options?: LineItemProductOption[];
    download_file_urls?: string[];
    download_page_url?: string;
    download_size?: string;
}
export interface GiftCertificate {
    id?: number;
    name?: string;
    theme?: string;
    amount?: number;
    quantity?: number;
    is_taxable?: boolean;
    sender?: ContactEntity;
    recipient?: ContactEntity;
    message?: string;
}
export interface CustomLineItem {
    id?: number;
    sku?: string;
    name?: string;
    quantity?: number;
    list_price?: number;
}
export interface AppliedLineItemCoupons {
    coupons?: AppliedLineItemCoupon;
}
export interface AppliedLineItemCoupon {
    coupon_code?: object;
    id?: number;
    code?: string;
    name?: string;
    discountType?: number;
    discountAmount?: number;
    expiresDate?: number;
    totalDiscount?: number;
}
export interface LineItemProductOption {
    name?: string;
    nameId?: number;
    value?: string;
    valueId?: number;
}
export interface LineItemGiftWrapping {
    name?: string;
    message?: string;
    amount?: number;
}
export interface Promotions {
    banners?: Banners;
}
export interface Banners {
    id?: string;
    type?: string;
    page?: string;
    text?: string;
}
export interface CartLineItemsRequest {
    line_items?: LineItemWithVariant[] | LineItemWithModifier[];
    gift_certificates?: GiftCertificate[];
    custom_items?: CustomLineItem[];
}
export interface LineItemWithVariant {
    quantity?: number;
    product_id?: number;
    list_price?: number;
    variant_id?: number;
    name?: string;
    gift_wrapping?: GiftWrapping;
}
export interface LineItemWithModifier {
    quantity?: number;
    product_id?: number;
    list_price?: number;
    name?: string;
    option_selections?: OptionSelection[];
    gift_wrapping?: GiftWrapping;
}
export interface GiftWrapping {
    wrap_together?: boolean;
    wrap_details?: WrapDetails[];
}
export interface WrapDetails {
    id?: number;
    message?: string;
}
export interface ContactEntity {
    name?: string;
    email?: string;
}
export interface OptionSelection {
    option_id?: number;
    option_value?: number;
    name?: string;
    value?: string;
    nameId?: number;
    valueId?: number;
}
export interface CarRedirectUrl {
    cart_url?: string;
    checkout_url?: string;
    embedded_checkout_url?: string;
}
export interface CartSettings {
    allow_purchasing?: boolean;
}
export interface CreateCartRequest {
    customer_id?: number;
    line_items?: LineItemWithVariant[] | LineItemWithModifier[];
    gift_certificates?: GiftCertificate[];
    custom_items?: CustomLineItem[];
    channel_id?: number;
    currency?: Currency;
    locale?: string;
}
export interface CartsQueryParam {
    include?: string;
}
