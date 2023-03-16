"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingV2Api = void 0;
const shipping_carrier_api_1 = require("./shipping-carrier-api");
const shipping_method_api_1 = require("./shipping-method-api");
const shipping_zone_api_1 = require("./shipping-zone-api");
class ShippingV2Api {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.shippingCarrier = new shipping_carrier_api_1.ShippingCarrierApi(this.apiClient);
        this.shippingMethod = new shipping_method_api_1.ShippingMethodApi(this.apiClient);
        this.shippingZones = new shipping_zone_api_1.ShippingZoneApi(this.apiClient);
    }
}
exports.ShippingV2Api = ShippingV2Api;
