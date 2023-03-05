import { ApiClient } from "../api-client";
import { Data, Image } from "../model/common";
export declare class ProductModifierImageApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createImage<T extends Image>(productId: number, modifierId: number, valueId: number, image: T): Promise<Data<T>>;
}
