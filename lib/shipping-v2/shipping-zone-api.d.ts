import { ApiClient } from "../api-client";
import { ShippingZone, ShippingZonePost, ShippingZonePut } from "../model/generated/shipping.v2";
export declare class ShippingZoneApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllShippingZones<T extends ShippingZone>(page?: number, limit?: number): Promise<T[]>;
    createShippingZone<T extends ShippingZonePost, R extends ShippingZone>(shippingZone: T): Promise<R>;
    getShippingZone<T extends ShippingZone>(zoneId: number): Promise<T>;
    updateShippingZone<T extends ShippingZonePut, R extends ShippingZone>(zoneId: number, shippingZone: T): Promise<R>;
    deleteShippingZone(zoneId: number): Promise<void>;
}
