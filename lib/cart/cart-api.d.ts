import { ApiClient } from "../api-client";
import { Cart, CartsQueryParam, CreateCartRequest, UpdateCustomerIdRequest } from "../model/cart";
export declare class CartApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCart<Params extends CartsQueryParam, T extends CreateCartRequest, R extends Cart>(createCartRequest: T, params?: Params): Promise<R>;
    getCart<Params extends CartsQueryParam, T extends Cart>(cartId: number, params?: Params): Promise<T>;
    updateCustomerId<Params extends CartsQueryParam, T extends UpdateCustomerIdRequest, R extends Cart>(cartId: number, updateCustomerIdRequest: T, params?: Params): Promise<R>;
    deleteCart(cartId: number): Promise<void>;
}
