import { ApiClient } from "../api-client";
import { ImageApiClient } from "../image";
import { MetafieldApiClient } from "../metafield";
import { BrandApiClient } from "./brand-api-client";
import { CategoryApiClient } from "./category-api-client";
import { CategoryBatchApiClient } from "./category-batch-api-client";

export class CatalogApiClient {
    constructor(private readonly apiClient: ApiClient) {}

    readonly brands = new BrandApiClient(this.apiClient);
    readonly brandImages = new ImageApiClient(
        this.apiClient,
        "/v3/catalog/brands"
    );
    readonly brandMetafields = new MetafieldApiClient(
        this.apiClient,
        "/v3/catalog/brands"
    );
    readonly category = new CategoryApiClient(this.apiClient);
    readonly categoriesBatch = new CategoryBatchApiClient(this.apiClient);
    readonly categoryMetafields = new MetafieldApiClient(
        this.apiClient,
        "/v3/catalog/categories"
    );
    readonly categoryImages = new ImageApiClient(
        this.apiClient,
        "/v3/catalog/categories"
    );
}
