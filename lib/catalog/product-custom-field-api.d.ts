import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productCustomField_Base, productCustomField_Post, productCustomField_Put } from "../model/generated/catalog.v3";
export declare class ProductCustomFieldApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomFields<Params extends FieldAwareQueryParams, T extends productCustomField_Base>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomField<T extends productCustomField_Post, R extends productCustomField_Base>(productId: number, customField: T): Promise<Data<R>>;
    getCustomField<T extends productCustomField_Base, Params extends FieldAwareQueryParams>(productId: number, customFieldId: number, params?: Params): Promise<Data<T>>;
    updateCustomField<T extends productCustomField_Put, R extends productCustomField_Base>(productId: number, customFieldId: number, customField: T): Promise<Data<T>>;
    deleteCustomField(productId: number, customFieldId: number): Promise<void>;
}
