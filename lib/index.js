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
const abandoned_cart_emails_1 = require("./abandoned-cart-emails");
const abandoned_carts_1 = require("./abandoned-carts");
const api_client_1 = require("./api-client");
const cart_1 = require("./cart");
const catalog_1 = require("./catalog");
const channels_1 = require("./channels");
const checkouts_1 = require("./checkouts");
const currencies_1 = require("./currencies");
const custom_template_associations_1 = require("./custom-template-associations");
const customers_v2_1 = require("./customers-v2");
const customers_v3_1 = require("./customers-v3");
const email_templates_1 = require("./email-templates");
const geography_1 = require("./geography");
const marketing_1 = require("./marketing");
const common_1 = require("./model/common");
const order_1 = require("./order");
const order_transactions_1 = require("./order-transactions");
const pages_1 = require("./pages");
const payment_methods_1 = require("./payment-methods");
const payment_processing_1 = require("./payment-processing");
const price_lists_1 = require("./price-lists");
const pricing_1 = require("./pricing");
const redirects_1 = require("./redirects");
const scripts_1 = require("./scripts");
const settings_1 = require("./settings");
const shipping_v2_1 = require("./shipping-v2");
const shipping_v3_1 = require("./shipping-v3");
const sites_1 = require("./sites");
const store_content_1 = require("./store-content");
const store_information_1 = require("./store-information");
const system_logs_1 = require("./system-logs");
const subscribers_1 = require("./subscribers");
const tax_classes_1 = require("./tax-classes");
const tax_properties_1 = require("./tax-properties");
const tax_provider_connection_1 = require("./tax-provider-connection");
const tax_rates_and_zones_1 = require("./tax-rates-and-zones");
const tax_settings_1 = require("./tax-settings");
const themes_1 = require("./themes");
const webhooks_1 = require("./webhooks");
const widgets_1 = require("./widgets");
const wishlists_1 = require("./wishlists");
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
        type: common_1.CacheType.IN_MEMORY,
    },
};
class BigCommerceApiClient {
    constructor(config) {
        this.config = config;
        this.config = Object.assign({}, DEFAULT_CONFIG, this.config);
        this.apiClient = new api_client_1.ApiClient(this.config);
        this.abandonedCarts = new abandoned_carts_1.AbandonedCartApi(this.apiClient);
        this.carts = new cart_1.CartsApi(this.apiClient);
        this.catalog = new catalog_1.CatalogApi(this.apiClient);
        this.channels = new channels_1.ChannelsApi(this.apiClient);
        this.checkouts = new checkouts_1.CheckoutsApi(this.apiClient);
        this.currencies = new currencies_1.CurrenciesApi(this.apiClient);
        this.customersV2 = new customers_v2_1.CustomersV2Api(this.apiClient);
        this.customersV3 = new customers_v3_1.CustomersV3Api(this.apiClient);
        this.geography = new geography_1.GeographyApi(this.apiClient);
        this.orders = new order_1.OrderApi(this.apiClient);
        this.orderTransactions = new order_transactions_1.OrderTransactionsApi(this.apiClient);
        this.pricing = new pricing_1.PricingApi(this.apiClient);
        this.priceLists = new price_lists_1.PriceListsApi(this.apiClient);
        this.redirects = new redirects_1.RedirectsApi(this.apiClient);
        this.scripts = new scripts_1.ScriptsApi(this.apiClient);
        this.settings = new settings_1.SettingsApi(this.apiClient);
        this.shippingV3 = new shipping_v3_1.ShippingV3Api(this.apiClient);
        this.shippingV2 = new shipping_v2_1.ShippingV2Api(this.apiClient);
        this.sites = new sites_1.SitesApi(this.apiClient);
        this.storeInformation = new store_information_1.StoreInformationApi(this.apiClient);
        this.systemLogs = new system_logs_1.SystemLogsApi(this.apiClient);
        this.subscribers = new subscribers_1.SubscribersApi(this.apiClient);
        this.taxClasses = new tax_classes_1.TaxClassesApi(this.apiClient);
        this.taxRatesAndZones = new tax_rates_and_zones_1.TaxRatesAndZonesApi(this.apiClient);
        this.taxProperties = new tax_properties_1.TaxPropertiesApi(this.apiClient);
        this.taxSettings = new tax_settings_1.TaxSettingsApi(this.apiClient);
        this.wishlists = new wishlists_1.WishlistsApi(this.apiClient);
        this.paymentMethods = new payment_methods_1.PaymentMethodsApi(this.apiClient);
        this.paymentProcessing = new payment_processing_1.PaymentProcessingApi(this.apiClient);
        this.abandonedCartEmails = new abandoned_cart_emails_1.AbandonedCartEmailsApi(this.apiClient);
        this.customTemplateAssociations = new custom_template_associations_1.CustomTemplateAssociationsApi(this.apiClient);
        this.emailTemplates = new email_templates_1.EmailTemplatesApi(this.apiClient);
        this.pages = new pages_1.PagesApi(this.apiClient);
        this.marketing = new marketing_1.MarketingApi(this.apiClient);
        this.storeContent = new store_content_1.StoreContentApi(this.apiClient);
        this.themes = new themes_1.ThemesApi(this.apiClient);
        this.widgets = new widgets_1.WidgetsApi(this.apiClient);
        this.taxProviderConnection = new tax_provider_connection_1.TaxProviderConnectionApi(this.apiClient);
        this.webhooks = new webhooks_1.WebhooksApi(this.apiClient);
    }
    getResources(resourceUrl, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.apiClient.getResources(resourceUrl, page, limit);
        });
    }
    enableCache(enable, ttl) {
        this.apiClient.enableCache(enable, ttl);
    }
    flushCache(region) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiClient.axiosInstance.storage.remove(region || "*");
        });
    }
}
exports.BigCommerceApiClient = BigCommerceApiClient;
