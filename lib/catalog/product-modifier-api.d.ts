import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productModifier_Full, productModifier_Post, productModifier_Put } from "../model/generated/catalog.v3";
export declare class ProductModifierApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllModifiers<Params extends FieldAwareQueryParams, T extends productModifier_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createModifier<T extends productModifier_Post, R extends productModifier_Full>(productId: number, modifier: T): Promise<Data<R>>;
    getModifier<T extends productModifier_Full, Params extends FieldAwareQueryParams>(productId: number, modifierId: number, params?: Params): Promise<Data<T>>;
    updateModifier<T extends productModifier_Put, R extends productModifier_Full>(productId: number, modifierId: number, modifier: T): Promise<Data<R>>;
    deleteModifier(productId: number, modifierId: number): Promise<void>;
}
