import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { complexRule_Base } from "../model/generated/catalog.v3";
export declare class ProductComplexRuleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllComplexRules<Params extends FieldAwareQueryParams, T extends complexRule_Base>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createComplexRule<T extends complexRule_Base>(productId: number, complexRule: T): Promise<Data<T>>;
    getComplexRule<T extends complexRule_Base, Params extends FieldAwareQueryParams>(productId: number, complexRuleId: number, params?: Params): Promise<Data<T>>;
    updateComplexRule<T extends complexRule_Base>(productId: number, complexRuleId: number, complexRule: T): Promise<Data<T>>;
    deleteComplexRule(productId: number, complexRuleId: number): Promise<void>;
}
