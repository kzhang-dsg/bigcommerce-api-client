import { ApiClient } from "../api-client";
import { UpdateProductsQueryParams, DeleteProductsQueryParams, GetProductQueryParams, Product, ProductsQueryParams } from "../model/catalog";
import { Data, PaginatedData } from "../model/common";
export declare class ProductApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllProducts<Params extends ProductsQueryParams, T extends Product>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    batchUpdateProducts<Params extends UpdateProductsQueryParams, T extends Product>(products: T[], params?: Params): Promise<PaginatedData<T>>;
    createProduct<T extends Product>(product: T): Promise<Data<T>>;
    deleteProducts<Params extends DeleteProductsQueryParams>(params?: Params): Promise<void>;
    getProduct<T extends Product, Params extends GetProductQueryParams>(productId: number, params?: Params): Promise<Data<T>>;
    updateProduct<Params extends UpdateProductsQueryParams, T extends Product>(product: T, params?: Params): Promise<Data<T>>;
    deleteProduct(productId: number): Promise<void>;
}
