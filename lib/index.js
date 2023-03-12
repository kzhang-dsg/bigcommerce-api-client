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
exports.BigCommerceApiClient = void 0;
const api_client_1 = require("./api-client");
const cart_1 = require("./cart");
const catalog_1 = require("./catalog");
const customers_v2_1 = require("./customers-v2");
const customers_v3_1 = require("./customers-v3");
const order_1 = require("./order");
const DEFAULT_CONFIG = {
    storeHash: "",
    accessToken: "",
    defaultLimit: 250,
    timeout: 60000,
    maxRetries: 5,
    retryDelay: 5000,
    retryOnReadTimeout: true,
    failOn404: false,
    cache: {
        enable: false,
        ttl: 1000 * 60 * 10,
        cloneData: false,
    },
};
class BigCommerceApiClient {
    constructor(config) {
        this.config = config;
        this.config = Object.assign(DEFAULT_CONFIG, this.config);
        this.apiClient = new api_client_1.ApiClient(this.config);
        this.carts = new cart_1.CartsApi(this.apiClient);
        this.catalog = new catalog_1.CatalogApi(this.apiClient);
        this.customersV2 = new customers_v2_1.CustomersV2Api(this.apiClient);
        this.customersV3 = new customers_v3_1.CustomersV3Api(this.apiClient);
        this.orders = new order_1.OrderApi(this.apiClient);
    }
    getResources(resourceUrl, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiClient.getResources(resourceUrl, page, limit);
        });
    }
    flushCache(region) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.enable)) {
                return;
            }
            this.apiClient.axiosInstance.storage.remove(region || "*");
        });
    }
}
exports.BigCommerceApiClient = BigCommerceApiClient;
