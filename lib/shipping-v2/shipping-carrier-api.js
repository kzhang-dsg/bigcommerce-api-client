"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingCarrierApi = void 0;
class ShippingCarrierApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    updateCarrierConnection(carrierConnection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.put(`/v2/shipping/carrier/connection`, carrierConnection);
        });
    }
    createCarrierConnection(carrierConnection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.post(`/v2/shipping/carrier/connection`, carrierConnection);
        });
    }
    deleteCarrierConnection(carrierId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/shipping/carrier/connection`, {
                data: {
                    carrier_id: carrierId,
                },
            });
        });
    }
}
exports.ShippingCarrierApi = ShippingCarrierApi;
