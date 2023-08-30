import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { ProductTaxProperty } from "../model/generated/tax_properties.v3";
export declare class ProductTaxPropertyApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getProductTaxProperties<Params extends IdInQueryParams, T extends ProductTaxProperty>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    updateProductTaxProperties<T extends ProductTaxProperty>(taxProperties: T[]): Promise<PaginatedData<T>>;
    deleteProductTaxProperties<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
