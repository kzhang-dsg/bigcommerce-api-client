import { ApiClient } from "../api-client";
import { DeleteBrandsQueryParams, BrandsQueryParams } from "../model/query/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { brand_Full } from "../model/generated/catalog.v3";
export declare class BrandApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBrands<Params extends BrandsQueryParams, T extends brand_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBrand<T extends brand_Full>(brand: T): Promise<Data<T>>;
    deleteBrands<Params extends DeleteBrandsQueryParams>(params?: Params): Promise<void>;
    getBrand<T extends brand_Full, Params extends FieldAwareQueryParams>(brandId: number, params?: Params): Promise<Data<T>>;
    updateBrand<T extends brand_Full>(brand: T): Promise<Data<T>>;
    deleteBrand(brandId: number): Promise<void>;
}
