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
exports.StoreInformationApi = void 0;
class StoreInformationApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getStoreInformation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/store`);
            return response.data;
        });
    }
    getSystemTimestamp() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/time`, undefined, undefined, { cache: false } // disable cache for timestamp
            );
            return response.data;
        });
    }
}
exports.StoreInformationApi = StoreInformationApi;
