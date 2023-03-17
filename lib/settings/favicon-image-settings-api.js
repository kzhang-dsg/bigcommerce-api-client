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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaviconImageSettingsApi = void 0;
const form_data_1 = __importDefault(require("form-data"));
const util_1 = require("../util");
class FaviconImageSettingsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    createFaviconImage(image, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("FaviconFile", image);
            const response = yield this.apiClient.post((0, util_1.appendQueryString)(`/v3/settings/favicon/image`, params), formData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });
            return response.data;
        });
    }
}
exports.FaviconImageSettingsApi = FaviconImageSettingsApi;
