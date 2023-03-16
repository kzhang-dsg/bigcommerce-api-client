import { ApiClient } from "../api-client";
import {
    ShippingZone,
    ShippingZonePost,
    ShippingZonePut,
} from "../model/generated/shipping.v2";

export class ShippingZoneApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllShippingZones<T extends ShippingZone>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/shipping/zones`,
            page,
            limit
        );
        return response.data;
    }

    async createShippingZone<
        T extends ShippingZonePost,
        R extends ShippingZone
    >(shippingZone: T): Promise<R> {
        const response = await this.apiClient.post(
            `/v2/shipping/zones`,
            shippingZone
        );
        return response.data;
    }

    async getShippingZone<T extends ShippingZone>(zoneId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/shipping/zones/${zoneId}`
        );
        return response.data;
    }

    async updateShippingZone<T extends ShippingZonePut, R extends ShippingZone>(
        zoneId: number,
        shippingZone: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/shipping/zones/${zoneId}`,
            shippingZone
        );
        return response.data;
    }

    async deleteShippingZone(zoneId: number): Promise<void> {
        await this.apiClient.delete(`/v2/shipping/zones/${zoneId}`);
    }
}
