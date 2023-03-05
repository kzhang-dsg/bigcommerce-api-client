import { ApiClient } from "../api-client";
import { Brand, DeleteBrandsQueryParams, BrandsQueryParams } from "../model/brand";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class BrandApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBrands<Params extends BrandsQueryParams, T extends Brand>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBrand<T extends Brand>(brand: T): Promise<Data<T>>;
    deleteBrands<Params extends DeleteBrandsQueryParams>(params?: Params): Promise<void>;
    getBrand<T extends Brand, Params extends FieldAwareQueryParams>(brandId: number, params?: Params): Promise<Data<T>>;
    updateBrand<T extends Brand>(brand: T): Promise<Data<T>>;
    deleteBrand(brandId: number): Promise<void>;
}
