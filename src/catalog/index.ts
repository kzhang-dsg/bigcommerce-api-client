import { ApiClient } from "../api-client";
import { ImageApi } from "../image";
import { MetafieldApi } from "../metafield";
import { BrandApi } from "./brand-api";
import { CategoryApi } from "./category-api";
import { CategoryBatchApi } from "./category-batch-api";
import { ProductApi } from "./product-api";

export class CatalogApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly brands = new BrandApi(this.apiClient);
    readonly brandImages = new ImageApi(this.apiClient, "/v3/catalog/brands");
    readonly brandMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/catalog/brands"
    );
    readonly category = new CategoryApi(this.apiClient);
    readonly categoriesBatch = new CategoryBatchApi(this.apiClient);
    readonly categoryMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/catalog/categories"
    );
    readonly categoryImages = new ImageApi(
        this.apiClient,
        "/v3/catalog/categories"
    );
    readonly products = new ProductApi(this.apiClient);
}
