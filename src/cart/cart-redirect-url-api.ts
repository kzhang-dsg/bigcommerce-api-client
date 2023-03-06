import { ApiClient } from "../api-client";
import { CarRedirectUrl } from "../model/cart";
import { Data } from "../model/common";

export class CartRedirectUrlApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createCartLineRedirectUrls<T extends CarRedirectUrl>(
        cartId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/carts/${cartId}/redirect_urls`
        );
        return response.data;
    }
}
