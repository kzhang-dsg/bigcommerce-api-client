import { ApiClient } from "../api-client";
import {
    UpdateProductsQueryParams,
    DeleteProductsQueryParams,
    GetProductQueryParams,
    ProductsQueryParams,
} from "../model/query/catalog";
import { Data, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import {
    product_Full,
    product_Post,
    product_Put,
    product_Put_Collection,
} from "../model/generated/catalog.v3";

const MAX_BATCH_SIZE = 10;

export class ProductApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllProducts<
        Params extends ProductsQueryParams,
        T extends product_Full
    >(
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
        T extends product_Put_Collection,
        R extends product_Full
    >(products: T, params?: Params): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < products.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                appendQueryString("/v3/catalog/products", params),
                products.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async createProduct<T extends product_Post, R extends product_Full>(
        product: T
    ): Promise<Data<R>> {
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

    async getProduct<
        T extends product_Full,
        Params extends GetProductQueryParams
    >(productId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/products/${productId}`, params)
        );
        return response.data;
    }

    async updateProduct<
        Params extends UpdateProductsQueryParams,
        T extends product_Put,
        R extends product_Full
    >(productId: number, product: T, params?: Params): Promise<Data<R>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/catalog/products/${productId}`, params),
            product
        );
        return response.data;
    }

    async deleteProduct(productId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/products/${productId}`);
    }
}
