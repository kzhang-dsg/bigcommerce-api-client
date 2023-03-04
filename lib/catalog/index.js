"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogApi = void 0;
const image_1 = require("../image");
const metafield_1 = require("../metafield");
const brand_api_1 = require("./brand-api");
const category_api_1 = require("./category-api");
const category_batch_api_1 = require("./category-batch-api");
const product_api_1 = require("./product-api");
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
    }
}
exports.CatalogApi = CatalogApi;
//# sourceMappingURL=index.js.map