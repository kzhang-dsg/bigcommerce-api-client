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
exports.ThemesApi = void 0;
const form_data_1 = __importDefault(require("form-data"));
const common_1 = require("../model/common");
const theme_action_api_1 = require("./theme-action-api");
const theme_configuration_api_1 = require("./theme-configuration-api");
const theme_custom_template_api_1 = require("./theme-custom-template-api");
const theme_job_api_1 = require("./theme-job-api");
class ThemesApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.themeActions = new theme_action_api_1.ThemeActionApi(this.apiClient);
        this.themeConfiguration = new theme_configuration_api_1.ThemeConfigurationApi(this.apiClient);
        this.themeCustomTemplates = new theme_custom_template_api_1.ThemeCustomTemplateApi(this.apiClient);
        this.themeJobs = new theme_job_api_1.ThemeJobApi(this.apiClient);
    }
    getAllTheme(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v3/themes", page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    uploadTheme(theme) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("file", theme);
            const response = yield this.apiClient.post("/v3/themes", formData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });
            return response.data;
        });
    }
    getTheme(themeUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/themes/${themeUuid}`);
            return response.data;
        });
    }
    deleteTheme(themeUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/themes/${themeUuid}`);
        });
    }
}
exports.ThemesApi = ThemesApi;
