import { ApiClient } from "../api-client";
import {
    UpdateProductsQueryParams,
    DeleteProductsQueryParams,
    GetProductQueryParams,
    Product,
    ProductsQueryParams,
} from "../model/catalog";
import { Data, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllProducts<Params extends ProductsQueryParams, T extends Product>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/catalog/products", params),
            page,
            limit
        );
        return response.data;
    }

    async batchUpdateProducts<
        Params extends UpdateProductsQueryParams,
        T extends Product
    >(products: T[], params?: Params): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            appendQueryString("/v3/catalog/products", params),
            products
        );
        return response.data;
    }

    async createProduct<T extends Product>(product: T): Promise<Data<T>> {
        const response = await this.apiClient.post(
            "/v3/catalog/products",
            product
        );
        return response.data;
    }

    async deleteProducts<Params extends DeleteProductsQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/catalog/products", params)
        );
    }

    async getProduct<T extends Product, Params extends GetProductQueryParams>(
        productId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/products/${productId}`, params)
        );
        return response.data;
    }

    async updateProduct<
        Params extends UpdateProductsQueryParams,
        T extends Product
    >(product: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/catalog/products/${product.id}`, params),
            product
        );
        return response.data;
    }

    async deleteProduct(productId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/products/${productId}`);
    }
}
