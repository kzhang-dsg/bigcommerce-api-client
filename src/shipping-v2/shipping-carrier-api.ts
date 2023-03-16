import { ApiClient } from "../api-client";
import { carrierConnection } from "../model/generated/shipping.v2";

export class ShippingCarrierApi {
    constructor(private readonly apiClient: ApiClient) {}

    async updateCarrierConnection<T extends carrierConnection>(
        carrierConnection: T
    ): Promise<void> {
        await this.apiClient.put(
            `/v2/shipping/carrier/connection`,
            carrierConnection
        );
    }

    async createCarrierConnection<T extends carrierConnection>(
        carrierConnection: T
    ): Promise<void> {
        await this.apiClient.post(
            `/v2/shipping/carrier/connection`,
            carrierConnection
        );
    }

    async deleteCarrierConnection(carrierId: string): Promise<void> {
        await this.apiClient.delete(`/v2/shipping/carrier/connection`, {
            data: {
                carrier_id: carrierId,
            },
        });
    }
}
