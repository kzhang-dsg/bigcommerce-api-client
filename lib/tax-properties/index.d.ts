import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { Property, PropertyPOST, PropertyPUT } from "../model/generated/tax_properties.v3";
import { ProductTaxPropertyApi } from "./product-tax-property-api";
export declare class TaxPropertiesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly productTaxProperties: ProductTaxPropertyApi;
    getTaxProperties<Params extends IdInQueryParams, T extends Property>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    updateTaxProperties<T extends PropertyPUT, R extends Property>(taxProperties: T[]): Promise<PaginatedData<R>>;
    createTaxProperties<T extends PropertyPOST, R extends Property>(taxProperties: T[]): Promise<PaginatedData<R>>;
    deleteTaxProperties<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
