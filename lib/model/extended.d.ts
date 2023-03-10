import { bulkPricingRule_Full, ProductCategoryAssignment, ProductChannelAssignment } from "./generated/catalog.v3";
export type ExtendedProductChannelAssignment = ProductChannelAssignment & {
    product_id?: number;
    channel_id?: number;
};
export type ExtendedProductCategoryAssignment = ProductCategoryAssignment & {
    product_id?: number;
    category_id?: number;
};
export type ExtendedBulkPricingRule = bulkPricingRule_Full & {
    id?: number;
};
export type CartRedirectResponse = {
    cart_url?: string;
    checkout_url?: string;
    embedded_checkout_url?: string;
};
