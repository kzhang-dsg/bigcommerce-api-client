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
exports.ScriptsApi = void 0;
const util_1 = require("../util");
class ScriptsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    createScript(script) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/content/scripts", script);
            return response.data;
        });
    }
    getAllScripts(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/content/scripts", params), page, limit);
            return response.data;
        });
    }
    getScript(scriptUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/content/scripts/${scriptUuid}`);
            return response.data;
        });
    }
    updateScript(scriptUuid, script) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/content/scripts/${scriptUuid}`, script);
            return response.data;
        });
    }
    deleteScripts(scriptUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/content/scripts/${scriptUuid}`);
        });
    }
}
exports.ScriptsApi = ScriptsApi;
