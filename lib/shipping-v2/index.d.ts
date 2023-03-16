import { ApiClient } from "../api-client";
import { ShippingCarrierApi } from "./shipping-carrier-api";
import { ShippingMethodApi } from "./shipping-method-api";
import { ShippingZoneApi } from "./shipping-zone-api";
export declare class ShippingV2Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly shippingCarrier: ShippingCarrierApi;
    readonly shippingMethod: ShippingMethodApi;
    readonly shippingZones: ShippingZoneApi;
}
