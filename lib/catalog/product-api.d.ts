import { ApiClient } from "../api-client";
import { UpdateProductsQueryParams, DeleteProductsQueryParams, GetProductQueryParams, ProductsQueryParams } from "../model/query/catalog";
import { Data, PaginatedData } from "../model/common";
import { product_Full, product_Post, product_Put } from "../model/generated/catalog.v3";
export declare class ProductApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllProducts<Params extends ProductsQueryParams, T extends product_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    batchUpdateProducts<Params extends UpdateProductsQueryParams, T extends product_Full>(products: T[], params?: Params): Promise<PaginatedData<T>>;
    createProduct<T extends product_Post, R extends product_Full>(product: T): Promise<Data<R>>;
    deleteProducts<Params extends DeleteProductsQueryParams>(params?: Params): Promise<void>;
    getProduct<T extends product_Full, Params extends GetProductQueryParams>(productId: number, params?: Params): Promise<Data<T>>;
    updateProduct<Params extends UpdateProductsQueryParams, T extends product_Put, R extends product_Full>(productId: number, product: T, params?: Params): Promise<Data<R>>;
    deleteProduct(productId: number): Promise<void>;
}
