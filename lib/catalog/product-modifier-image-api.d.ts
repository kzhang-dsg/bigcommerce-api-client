import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { resourceImage_Full } from "../model/generated/catalog.v3";
export declare class ProductModifierImageApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createImage<T extends resourceImage_Full>(productId: number, modifierId: number, valueId: number, image: T): Promise<Data<T>>;
}
