import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { brand_Full, brand_Post, brand_Put } from "../model/generated/catalog.v3";
import { BrandsQueryParams, DeleteBrandsQueryParams } from "../model/query/catalog";
export declare class BrandApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBrands<Params extends BrandsQueryParams, T extends brand_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBrand<T extends brand_Post, R extends brand_Full>(brand: T): Promise<Data<R>>;
    deleteBrands<Params extends DeleteBrandsQueryParams>(params?: Params): Promise<void>;
    getBrand<T extends brand_Full, Params extends FieldAwareQueryParams>(brandId: number, params?: Params): Promise<Data<T>>;
    updateBrand<T extends brand_Put, R extends brand_Full>(brandId: number, brand: T): Promise<Data<R>>;
    deleteBrand(brandId: number): Promise<void>;
}
