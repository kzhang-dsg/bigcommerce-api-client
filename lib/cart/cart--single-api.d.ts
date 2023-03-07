import { ApiClient } from "../api-client";
import { Cart, CartsQueryParam, CreateCartRequest } from "../model/cart";
export declare class CartSingleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCart<Params extends CartsQueryParam, T extends CreateCartRequest, R extends Cart>(createCartRequest: T, params?: Params): Promise<R>;
    getCart<Params extends CartsQueryParam, T extends Cart>(cartId: number, params?: Params): Promise<T>;
    updateCustomerId<Params extends CartsQueryParam, T extends Cart>(cartId: number, customerId: number, params?: Params): Promise<T>;
    deleteCart(cartId: number): Promise<void>;
}
