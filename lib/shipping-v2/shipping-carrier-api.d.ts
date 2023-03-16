import { ApiClient } from "../api-client";
import { carrierConnection } from "../model/generated/shipping.v2";
export declare class ShippingCarrierApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    updateCarrierConnection<T extends carrierConnection>(carrierConnection: T): Promise<void>;
    createCarrierConnection<T extends carrierConnection>(carrierConnection: T): Promise<void>;
    deleteCarrierConnection(carrierId: string): Promise<void>;
}
