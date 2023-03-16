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
const abandoned_carts_1 = require("./abandoned-carts");
const api_client_1 = require("./api-client");
const cart_1 = require("./cart");
const catalog_1 = require("./catalog");
const channels_1 = require("./channels");
const checkouts_1 = require("./checkouts");
const currencies_1 = require("./currencies");
const customers_v2_1 = require("./customers-v2");
const customers_v3_1 = require("./customers-v3");
const order_1 = require("./order");
const price_lists_1 = require("./price-lists");
const pricing_1 = require("./pricing");
const redirects_1 = require("./redirects");
const scripts_1 = require("./scripts");
const settings_1 = require("./settings");
const shipping_v2_1 = require("./shipping-v2");
const shipping_v3_1 = require("./shipping-v3");
const sites_1 = require("./sites");
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
        this.abandonedCarts = new abandoned_carts_1.AbandonedCartApi(this.apiClient);
        this.carts = new cart_1.CartsApi(this.apiClient);
        this.catalog = new catalog_1.CatalogApi(this.apiClient);
        this.channels = new channels_1.ChannelsApi(this.apiClient);
        this.checkouts = new checkouts_1.CheckoutsApi(this.apiClient);
        this.currencies = new currencies_1.CurrenciesApi(this.apiClient);
        this.customersV2 = new customers_v2_1.CustomersV2Api(this.apiClient);
        this.customersV3 = new customers_v3_1.CustomersV3Api(this.apiClient);
        this.orders = new order_1.OrderApi(this.apiClient);
        this.pricing = new pricing_1.PricingApi(this.apiClient);
        this.priceLists = new price_lists_1.PriceListsApi(this.apiClient);
        this.redirects = new redirects_1.RedirectsApi(this.apiClient);
        this.scripts = new scripts_1.ScriptsApi(this.apiClient);
        this.settings = new settings_1.SettingsApi(this.apiClient);
        this.shippingV3 = new shipping_v3_1.ShippingV3Api(this.apiClient);
        this.shippingV2 = new shipping_v2_1.ShippingV2Api(this.apiClient);
        this.sites = new sites_1.SitesApi(this.apiClient);
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
