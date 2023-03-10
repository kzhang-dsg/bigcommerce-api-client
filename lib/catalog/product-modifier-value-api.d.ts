import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productModifierOptionValue_Full, productModifierOptionValue_Post } from "../model/generated/catalog.v3";
export declare class ProductModifierValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllModifierValues<Params extends FieldAwareQueryParams, T extends productModifierOptionValue_Full>(productId: number, modifierId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createModifierValue<T extends productModifierOptionValue_Post, R extends productModifierOptionValue_Full>(productId: number, modifierId: number, modifierValue: T): Promise<Data<R>>;
    getModifierValue<T extends productModifierOptionValue_Full, Params extends FieldAwareQueryParams>(productId: number, modifierId: number, valueId: number, params?: Params): Promise<Data<T>>;
    updateModifierValue<T extends productModifierOptionValue_Post, R extends productModifierOptionValue_Full>(productId: number, modifierId: number, modifierValueId: number, modifierValue: T): Promise<Data<R>>;
    deleteModifierValue(productId: number, modifierId: number, valueId: number): Promise<void>;
}
