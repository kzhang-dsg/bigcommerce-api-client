"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingV3Api = void 0;
const customs_information_api_1 = require("./customs-information-api");
class ShippingV3Api {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.customsInformation = new customs_information_api_1.CustomsInformationApi(this.apiClient);
    }
}
exports.ShippingV3Api = ShippingV3Api;
