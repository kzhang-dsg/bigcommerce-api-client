import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CartRedirectUrl } from "../model/generated/carts.v3";

export class CartRedirectUrlApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createCartLineRedirectUrl<T extends CartRedirectUrl>(
        cartId: string
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/carts/${cartId}/redirect_urls`
        );
        return response.data;
    }
}
