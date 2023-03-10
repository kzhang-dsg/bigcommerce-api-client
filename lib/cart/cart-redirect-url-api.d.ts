import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CartRedirectUrl } from "../model/generated/carts.v3";
export declare class CartRedirectUrlApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCartLineRedirectUrl<T extends CartRedirectUrl>(cartId: number): Promise<Data<T>>;
}
