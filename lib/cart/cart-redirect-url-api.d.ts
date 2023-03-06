import { ApiClient } from "../api-client";
import { CarRedirectUrl } from "../model/cart";
import { Data } from "../model/common";
export declare class CartRedirectUrlApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCartLineRedirectUrls<T extends CarRedirectUrl>(cartId: number): Promise<Data<T>>;
}
