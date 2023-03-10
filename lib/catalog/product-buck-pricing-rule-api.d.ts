import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { bulkPricingRule_Full } from "../model/generated/catalog.v3";
export declare class ProductBuckPricingRuleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBuckPricingRules<Params extends FieldAwareQueryParams, T extends bulkPricingRule_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBuckPricingRule<T extends bulkPricingRule_Full>(productId: number, buckPricingRule: T): Promise<Data<T>>;
    getBuckPricingRule<T extends bulkPricingRule_Full, Params extends FieldAwareQueryParams>(productId: number, buckPricingRuleId: number, params?: Params): Promise<Data<T>>;
    updateBuckPricingRule<T extends bulkPricingRule_Full>(productId: number, buckPricingRuleId: number, buckPricingRule: T): Promise<Data<T>>;
    deleteBuckPricingRule(productId: number, buckPricingRuleId: number): Promise<void>;
}
