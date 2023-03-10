import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CartRedirectResponse } from "../model/extended";

export class CartRedirectUrlApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createCartLineRedirectUrl<T extends CartRedirectResponse>(
        cartId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/carts/${cartId}/redirect_urls`
        );
        return response.data;
    }
}
