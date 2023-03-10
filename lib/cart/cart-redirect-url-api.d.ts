import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CartRedirectResponse } from "../model/extended";
export declare class CartRedirectUrlApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCartLineRedirectUrl<T extends CartRedirectResponse>(cartId: number): Promise<Data<T>>;
}
