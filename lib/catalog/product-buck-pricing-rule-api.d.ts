import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { bulkPricingRule_Full, bulkPricingRuleFull_Response } from "../model/generated/catalog.v3";
export declare class ProductBuckPricingRuleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBuckPricingRules<Params extends FieldAwareQueryParams, T extends bulkPricingRuleFull_Response>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBuckPricingRule<T extends bulkPricingRule_Full, R extends bulkPricingRuleFull_Response>(productId: number, buckPricingRule: T): Promise<Data<R>>;
    getBuckPricingRule<Params extends FieldAwareQueryParams, T extends bulkPricingRuleFull_Response>(productId: number, buckPricingRuleId: number, params?: Params): Promise<Data<T>>;
    updateBuckPricingRule<T extends bulkPricingRule_Full, R extends bulkPricingRuleFull_Response>(productId: number, buckPricingRuleId: number, buckPricingRule: T): Promise<Data<R>>;
    deleteBuckPricingRule(productId: number, buckPricingRuleId: number): Promise<void>;
}
