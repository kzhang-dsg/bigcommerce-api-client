import { ApiClient } from "../api-client";
import {
    DeleteBrandsQueryParams,
    BrandsQueryParams,
} from "../model/query/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import { brand_Post, brand_Put, brand_Full } from "../model/generated/catalog.v3";

export class BrandApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBrands<Params extends BrandsQueryParams, T extends brand_Full>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/catalog/brands", params),
            page,
            limit
        );
        return response.data;
    }

    async createBrand<T extends brand_Post, R extends brand_Full>(brand: T): Promise<Data<R>> {
        const response = await this.apiClient.post("/v3/catalog/brands", brand);
        return response.data;
    }

    async deleteBrands<Params extends DeleteBrandsQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/catalog/brands", params)
        );
    }

    async getBrand<T extends brand_Full, Params extends FieldAwareQueryParams>(
        brandId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/brands/${brandId}`, params)
        );
        return response.data;
    }

    async updateBrand<T extends brand_Put, R extends brand_Full>(brand: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/brands/${brand.id}`,
            brand
        );
        return response.data;
    }

    async deleteBrand(brandId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/brands/${brandId}`);
    }
}
