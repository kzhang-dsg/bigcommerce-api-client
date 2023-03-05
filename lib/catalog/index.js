"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogApi = void 0;
const image_1 = require("../image");
const metafield_1 = require("../metafield");
const brand_api_1 = require("./brand-api");
const category_api_1 = require("./category-api");
const category_batch_api_1 = require("./category-batch-api");
const product_api_1 = require("./product-api");
const product_buck_pricing_rule_api_1 = require("./product-buck-pricing-rule-api");
const product_complex_rule_api_1 = require("./product-complex-rule-api");
const product_custom_field_api_1 = require("./product-custom-field-api");
const product_modifier_api_1 = require("./product-modifier-api");
const product_modifier_image_api_1 = require("./product-modifier-image-api");
const product_review_api_1 = require("./product-review-api");
const product_variant_api_1 = require("./product-variant-api");
class CatalogApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.brands = new brand_api_1.BrandApi(this.apiClient);
        this.brandImages = new image_1.ImageApi(this.apiClient, "/v3/catalog/brands");
        this.brandMetafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/catalog/brands");
        this.category = new category_api_1.CategoryApi(this.apiClient);
        this.categoriesBatch = new category_batch_api_1.CategoryBatchApi(this.apiClient);
        this.categoryMetafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/catalog/categories");
        this.categoryImages = new image_1.ImageApi(this.apiClient, "/v3/catalog/categories");
        this.products = new product_api_1.ProductApi(this.apiClient);
        this.productBuckPricingRules = new product_buck_pricing_rule_api_1.ProductBuckPricingRuleApi(this.apiClient);
        this.productComplexRules = new product_complex_rule_api_1.ProductComplexRuleApi(this.apiClient);
        this.productCustomFields = new product_custom_field_api_1.ProductCustomFieldApi(this.apiClient);
        this.productMetafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/catalog/products");
        this.productModifiers = new product_modifier_api_1.ProductModifierApi(this.apiClient);
        this.ProductModifierImages = new product_modifier_image_api_1.ProductModifierImageApi(this.apiClient);
        this.productReviews = new product_review_api_1.ProductReviewApi(this.apiClient);
        this.productRVariants = new product_variant_api_1.ProductVariantApi(this.apiClient);
    }
}
exports.CatalogApi = CatalogApi;
