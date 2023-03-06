import { ApiClient } from "../api-client";
import { CartItemApi } from "./cart-item-api";
export declare class CartApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly cartItems: CartItemApi;
}
