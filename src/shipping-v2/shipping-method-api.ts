import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import {
    shippingMethod_Base,
    shippingMethod_Full,
} from "../model/generated/shipping.v2";

export class ShippingMethodApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllShippingMethodsInZone<T extends shippingMethod_Full>(
        zoneId: number,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/shipping/zones/${zoneId}/methods`,
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createShippingMethod<
        T extends shippingMethod_Base,
        R extends shippingMethod_Full
    >(zoneId: number, shippingMethod: T): Promise<R> {
        const response = await this.apiClient.post(
            `/v2/shipping/zones/${zoneId}/methods`,
            shippingMethod
        );
        return response.data;
    }

    async getShippingMethod<T extends shippingMethod_Full>(
        zoneId: number,
        shippingMethodId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/shipping/zones/${zoneId}/methods/${shippingMethodId}`
        );
        return response.data;
    }

    async updateShippingMethod<
        T extends shippingMethod_Base,
        R extends shippingMethod_Full
    >(zoneId: number, shippingMethodId: number, shippingMethod: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/shipping/zones/${zoneId}/methods/${shippingMethodId}`,
            shippingMethod
        );
        return response.data;
    }

    async deleteShippingMethod(
        zoneId: number,
        shippingMethodId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v2/shipping/zones/${zoneId}/methods/${shippingMethodId}`
        );
    }
}
