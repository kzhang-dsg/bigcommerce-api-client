import { ApiClient } from "../api-client";
import { ImageApi } from "../image";
import { MetafieldApi } from "../metafield";
import { BrandApi } from "./brand-api";
import { CategoryApi } from "./category-api";
import { CategoryBatchApi } from "./category-batch-api";
import { CategoryTreeApi } from "./category-tree-api";
import { ProductApi } from "./product-api";
import { ProductBuckPricingRuleApi } from "./product-buck-pricing-rule-api";
import { ProductCategoryAssignmentApi } from "./product-category-assignment-api";
import { ProductChannelAssignmentApi } from "./product-channel-assignment-api";
import { ProductComplexRuleApi } from "./product-complex-rule-api";
import { ProductCustomFieldApi } from "./product-custom-field-api";
import { ProductModifierApi } from "./product-modifier-api";
import { ProductModifierImageApi } from "./product-modifier-image-api";
import { ProductModifierValueApi } from "./product-modifier-value-api";
import { ProductImageApi } from './product-image-api';
import { ProductReviewApi } from "./product-review-api";
import { ProductSortOrderApi } from "./product-sort-order-api";
import { ProductVariantApi } from "./product-variant-api";
import { ProductVariantMetafieldApi } from "./product-variant-metafield-api";
import { ProductVariantOptionApi } from "./product-variant-option-api";
import { ProductVariantOptionValueApi } from "./product-variant-option-value-api";
import { ProductVideoApi } from "./product-video-api";
import { SummaryApi } from "./summary-api";
import { VariantApi } from "./variant-api";

export class CatalogApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly brandImages = new ImageApi(this.apiClient, "/v3/catalog/brands");
    readonly brandMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/catalog/brands"
    );
    readonly brands = new BrandApi(this.apiClient);
    readonly categoriesBatch = new CategoryBatchApi(this.apiClient);
    readonly category = new CategoryApi(this.apiClient);
    readonly categoryMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/catalog/categories"
    );
    readonly categoryImages = new ImageApi(
        this.apiClient,
        "/v3/catalog/categories"
    );
    readonly categoryTrees = new CategoryTreeApi(this.apiClient);
    readonly productBuckPricingRules = new ProductBuckPricingRuleApi(
        this.apiClient
    );
    readonly productComplexRules = new ProductComplexRuleApi(this.apiClient);
    readonly productCustomFields = new ProductCustomFieldApi(this.apiClient);

    readonly productMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/catalog/products"
    );
    readonly ProductModifierImages = new ProductModifierImageApi(
        this.apiClient
    );
    readonly ProductModifierValues = new ProductModifierValueApi(
        this.apiClient
    );
    readonly productModifiers = new ProductModifierApi(this.apiClient);
    readonly productImages = new ProductImageApi(this.apiClient);
    readonly productReviews = new ProductReviewApi(this.apiClient);
    readonly productSortOrder = new ProductSortOrderApi(this.apiClient);
    readonly productVariantOptionValues = new ProductVariantOptionValueApi(
        this.apiClient
    );
    readonly productVariantOptions = new ProductVariantOptionApi(
        this.apiClient
    );
    readonly productVariants = new ProductVariantApi(this.apiClient);
    readonly productVariantMetafields = new ProductVariantMetafieldApi(
        this.apiClient
    );
    readonly productVideos = new ProductVideoApi(this.apiClient);
    readonly products = new ProductApi(this.apiClient);
    readonly productCategoryAssignments = new ProductCategoryAssignmentApi(
        this.apiClient
    );
    readonly productChannelAssignments = new ProductChannelAssignmentApi(
        this.apiClient
    );
    readonly summary = new SummaryApi(this.apiClient);
    readonly variants = new VariantApi(this.apiClient);
}
