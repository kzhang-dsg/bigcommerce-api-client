import { ApiClient } from "../api-client";
import { CartCreatePostData, Cart_Full } from "../model/generated/carts.v3";
import { CartsQueryParam } from "../model/query/cart";
export declare class CartSingleApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCart<Params extends CartsQueryParam, T extends CartCreatePostData, R extends Cart_Full>(createCartRequest: T, params?: Params): Promise<R>;
    getCart<Params extends CartsQueryParam, T extends Cart_Full>(cartId: number, params?: Params): Promise<T>;
    updateCustomerId<Params extends CartsQueryParam, T extends Cart_Full>(cartId: number, customerId: number, params?: Params): Promise<T>;
    deleteCart(cartId: number): Promise<void>;
}
