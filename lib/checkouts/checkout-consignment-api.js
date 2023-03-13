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
exports.CheckoutConsignmentApi = void 0;
class CheckoutConsignmentApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    addConsignmentToCheckout(checkoutId, consignment) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/checkouts/${checkoutId}/consignments`, consignment);
            return response.data;
        });
    }
    updateCheckoutConsignment(checkoutId, consignmentId, consignment) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/checkouts/${checkoutId}/consignments/${consignmentId}`, consignment);
            return response.data;
        });
    }
    deleteCheckoutConsignment(checkoutId, consignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/checkouts/${checkoutId}/consignments/${consignmentId}`);
        });
    }
}
exports.CheckoutConsignmentApi = CheckoutConsignmentApi;
