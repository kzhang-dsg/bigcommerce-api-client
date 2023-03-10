import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { ExtendedBulkPricingRule } from "../model/extended";
import { bulkPricingRule_Full } from "../model/generated/catalog.v3";
export declare class ProductBuckPricingRuleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBuckPricingRules<Params extends FieldAwareQueryParams, T extends ExtendedBulkPricingRule>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBuckPricingRule<T extends bulkPricingRule_Full, R extends ExtendedBulkPricingRule>(productId: number, buckPricingRule: T): Promise<Data<R>>;
    getBuckPricingRule<T extends ExtendedBulkPricingRule, Params extends FieldAwareQueryParams>(productId: number, buckPricingRuleId: number, params?: Params): Promise<Data<T>>;
    updateBuckPricingRule<T extends bulkPricingRule_Full, R extends ExtendedBulkPricingRule>(productId: number, buckPricingRuleId: number, buckPricingRule: T): Promise<Data<R>>;
    deleteBuckPricingRule(productId: number, buckPricingRuleId: number): Promise<void>;
}
