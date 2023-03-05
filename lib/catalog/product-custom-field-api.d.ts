import { ApiClient } from "../api-client";
import { ProductCustomField } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductCustomFieldApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomFields<Params extends FieldAwareQueryParams, T extends ProductCustomField>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomField<T extends ProductCustomField>(productId: number, customField: T): Promise<Data<T>>;
    getCustomField<T extends ProductCustomField, Params extends FieldAwareQueryParams>(productId: number, customFieldId: number, params?: Params): Promise<Data<T>>;
    updateCustomField<T extends ProductCustomField>(productId: number, customField: T): Promise<Data<T>>;
    deleteCustomField(productId: number, customFieldId: number): Promise<void>;
}
