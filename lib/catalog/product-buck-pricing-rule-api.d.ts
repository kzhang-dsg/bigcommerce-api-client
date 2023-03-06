import { ApiClient } from "../api-client";
import { ProductBuckPricingRule } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductBuckPricingRuleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBuckPricingRules<Params extends FieldAwareQueryParams, T extends ProductBuckPricingRule>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createBuckPricingRule<T extends ProductBuckPricingRule>(productId: number, buckPricingRule: T): Promise<Data<T>>;
    getBuckPricingRule<T extends ProductBuckPricingRule, Params extends FieldAwareQueryParams>(productId: number, buckPricingRuleId: number, params?: Params): Promise<Data<T>>;
    updateBuckPricingRule<T extends ProductBuckPricingRule>(productId: number, buckPricingRule: T): Promise<Data<T>>;
    deleteBuckPricingRule(productId: number, buckPricingRuleId: number): Promise<void>;
}
