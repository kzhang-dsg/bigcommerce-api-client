import { ApiClient } from "../api-client";
import { ProductModifier } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductModifierApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllModifiers<Params extends FieldAwareQueryParams, T extends ProductModifier>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createModifier<T extends ProductModifier>(productId: number, modifier: T): Promise<Data<T>>;
    getModifier<T extends ProductModifier, Params extends FieldAwareQueryParams>(productId: number, modifierId: number, params?: Params): Promise<Data<T>>;
    updateModifier<T extends ProductModifier>(productId: number, modifier: T): Promise<Data<T>>;
    deleteModifier(productId: number, modifierId: number): Promise<void>;
}
