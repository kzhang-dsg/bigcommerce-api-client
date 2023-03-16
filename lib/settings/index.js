"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsApi = void 0;
const catalog_settings_api_1 = require("./catalog-settings-api");
const analytics_settings_api_1 = require("./analytics-settings-api");
const email_settings_api_1 = require("./email-settings-api");
const favicon_image_settings_api_1 = require("./favicon-image-settings-api");
const inventory_settings_api_1 = require("./inventory-settings-api");
const inventory_notification_settings_api_1 = require("./inventory-notification-settings-api");
const logo_settings_api_1 = require("./logo-settings-api");
const logo_image_settings_api_1 = require("./logo-image-settings-api");
const search_filter_settings_api_1 = require("./search-filter-settings-api");
const store_locale_settings_api_1 = require("./store-locale-settings-api");
const store_profile_settings_api_1 = require("./store-profile-settings-api");
const storefront_product_settings_api_1 = require("./storefront-product-settings-api");
const storefront_robots_txt_settings_api_1 = require("./storefront-robots-txt-settings-api");
const storefront_search_settings_api_1 = require("./storefront-search-settings-api");
const storefront_security_settings_api_1 = require("./storefront-security-settings-api");
const storefront_seo_settings_api_1 = require("./storefront-seo-settings-api");
const storefront_status_settings_api_1 = require("./storefront-status-settings-api");
class SettingsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.analytics = new analytics_settings_api_1.AnalyticsSettingsApi(this.apiClient);
        this.catalogs = new catalog_settings_api_1.CatalogSettingsApi(this.apiClient);
        this.emailStatuses = new email_settings_api_1.EmailSettingsApi(this.apiClient);
        this.faviconImage = new favicon_image_settings_api_1.FaviconImageSettingsApi(this.apiClient);
        this.inventory = new inventory_settings_api_1.InventorySettingsApi(this.apiClient);
        this.inventoryNotifications = new inventory_notification_settings_api_1.InventoryNotificationSettingsApi(this.apiClient);
        this.logo = new logo_settings_api_1.LogoSettingsApi(this.apiClient);
        this.logoImage = new logo_image_settings_api_1.LogoImageSettingsApi(this.apiClient);
        this.searchFilters = new search_filter_settings_api_1.SearchFilterSettingsApi(this.apiClient);
        this.storeLocale = new store_locale_settings_api_1.StoreLocaleSettingsApi(this.apiClient);
        this.storeProfile = new store_profile_settings_api_1.StoreProfileSettingsApi(this.apiClient);
        this.storefrontProduct = new storefront_product_settings_api_1.StorefrontProductSettingsApi(this.apiClient);
        this.storefrontRobotsTxt = new storefront_robots_txt_settings_api_1.StorefrontRobotsTxtSettingsApi(this.apiClient);
        this.storefrontSearch = new storefront_search_settings_api_1.StorefrontSearchSettingsApi(this.apiClient);
        this.storefrontSecurity = new storefront_security_settings_api_1.StorefrontSecuritySettingsApi(this.apiClient);
        this.storefrontSeo = new storefront_seo_settings_api_1.StorefrontSeoSettingsApi(this.apiClient);
        this.storefrontStatus = new storefront_status_settings_api_1.StorefrontStatusSettingsApi(this.apiClient);
    }
}
exports.SettingsApi = SettingsApi;
