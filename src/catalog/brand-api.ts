import { ApiClient } from "../api-client";
import {
    Brand,
    DeleteAllBrandsQueryParams,
    BrandsQueryParams,
} from "../model/brand";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class BrandApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBrands<Params extends BrandsQueryParams, T extends Brand>(
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

    async createBrand<T extends Brand>(brand: T): Promise<Data<T>> {
        const response = await this.apiClient.post("/v3/catalog/brands", brand);
        return response.data;
    }

    async deleteAllBrands<Params extends DeleteAllBrandsQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/catalog/brands", params)
        );
    }

    async getBrand<T extends Brand, Params extends FieldAwareQueryParams>(
        brandId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/brands/${brandId}`, params)
        );
        return response.data;
    }

    async updateBrand<T extends Brand>(brand: T): Promise<Data<T>> {
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
