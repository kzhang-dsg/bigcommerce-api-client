import { ApiClient } from "../api-client";
import { ProductModifierValue } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductModifierValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllModifierValues<Params extends FieldAwareQueryParams, T extends ProductModifierValue>(productId: number, modifierId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createModifierValue<T extends ProductModifierValue>(productId: number, modifierId: number, modifierValue: T): Promise<Data<T>>;
    getModifierValue<T extends ProductModifierValue, Params extends FieldAwareQueryParams>(productId: number, modifierId: number, valueId: number, params?: Params): Promise<Data<T>>;
    updateModifierValue<T extends ProductModifierValue>(productId: number, modifierId: number, modifierValue: T): Promise<Data<T>>;
    deleteModifierValue(productId: number, modifierId: number, valueId: number): Promise<void>;
}
