import { ApiClient } from "../api-client";
import { ShippingCarrierApi } from "./shipping-carrier-api";
import { ShippingMethodApi } from "./shipping-method-api";
import { ShippingZoneApi } from "./shipping-zone-api";

export class ShippingV2Api {
    constructor(private readonly apiClient: ApiClient) {}

    readonly shippingCarrier = new ShippingCarrierApi(this.apiClient);
    readonly shippingMethod = new ShippingMethodApi(this.apiClient);
    readonly shippingZones = new ShippingZoneApi(this.apiClient);
}
