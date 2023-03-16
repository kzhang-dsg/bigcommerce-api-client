import { ApiClient } from "../api-client";
import { shippingMethod_Base, shippingMethod_Full } from "../model/generated/shipping.v2";
export declare class ShippingMethodApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllShippingMethodsInZone<T extends shippingMethod_Full>(zoneId: number, page?: number, limit?: number): Promise<T[]>;
    createShippingMethod<T extends shippingMethod_Base, R extends shippingMethod_Full>(zoneId: number, shippingMethod: T): Promise<R>;
    getShippingMethod<T extends shippingMethod_Full>(zoneId: number, shippingMethodId: number): Promise<T>;
    updateShippingMethod<T extends shippingMethod_Base, R extends shippingMethod_Full>(zoneId: number, shippingMethodId: number, shippingMethod: T): Promise<R>;
    deleteShippingMethod(zoneId: number, shippingMethodId: number): Promise<void>;
}
