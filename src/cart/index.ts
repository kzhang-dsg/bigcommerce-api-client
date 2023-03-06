import { ApiClient } from "../api-client";
import { CartItemApi } from "./cart-item-api";

export class CartApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly cartItems = new CartItemApi(this.apiClient);
}
