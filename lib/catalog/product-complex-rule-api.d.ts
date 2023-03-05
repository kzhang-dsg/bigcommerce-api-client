import { ApiClient } from "../api-client";
import { ProductComplexRule } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductComplexRuleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllComplexRules<Params extends FieldAwareQueryParams, T extends ProductComplexRule>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createComplexRule<T extends ProductComplexRule>(productId: number, complexRule: T): Promise<Data<T>>;
    getComplexRule<T extends ProductComplexRule, Params extends FieldAwareQueryParams>(productId: number, complexRuleId: number, params?: Params): Promise<Data<T>>;
    updateComplexRule<T extends ProductComplexRule>(productId: number, complexRule: T): Promise<Data<T>>;
    deleteComplexRule(productId: number, complexRuleId: number): Promise<void>;
}
