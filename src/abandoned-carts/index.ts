import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { abandonedCartInfo_Full } from "../model/generated/abandoned_carts.v3";
import { AbandonedCartSSettingsApi } from "./abandoned-cart-settings-api";

export class AbandonedCartApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly abandonedCartSSettings = new AbandonedCartSSettingsApi(
        this.apiClient
    );

    async getAbandonedCart<T extends abandonedCartInfo_Full>(
        token: string
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/abandoned-carts/${token}`
        );
        return response.data;
    }
}
