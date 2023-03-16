import { ApiClient } from "../api-client";
import { CatalogSettingsApi } from "./catalog-settings-api";
import { AnalyticsSettingsApi } from "./analytics-settings-api";
import { EmailSettingsApi } from "./email-settings-api";
import { FaviconImageSettingsApi } from "./favicon-image-settings-api";
import { InventorySettingsApi } from "./inventory-settings-api";
import { InventoryNotificationSettingsApi } from "./inventory-notification-settings-api";
import { LogoSettingsApi } from "./logo-settings-api";
import { LogoImageSettingsApi } from "./logo-image-settings-api";
import { SearchFilterSettingsApi } from "./search-filter-settings-api";
import { StoreLocaleSettingsApi } from "./store-locale-settings-api";
import { StoreProfileSettingsApi } from "./store-profile-settings-api";
import { StorefrontProductSettingsApi } from "./storefront-product-settings-api";
import { StorefrontRobotsTxtSettingsApi } from "./storefront-robots-txt-settings-api";
import { StorefrontSearchSettingsApi } from "./storefront-search-settings-api";
import { StorefrontSecuritySettingsApi } from "./storefront-security-settings-api";
import { StorefrontSeoSettingsApi } from "./storefront-seo-settings-api";
import { StorefrontStatusSettingsApi } from "./storefront-status-settings-api";

export class SettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly analytics = new AnalyticsSettingsApi(this.apiClient);
    readonly catalogs = new CatalogSettingsApi(this.apiClient);
    readonly emailStatuses = new EmailSettingsApi(this.apiClient);
    readonly faviconImage = new FaviconImageSettingsApi(this.apiClient);
    readonly inventory = new InventorySettingsApi(this.apiClient);
    readonly inventoryNotifications = new InventoryNotificationSettingsApi(
        this.apiClient
    );
    readonly logo = new LogoSettingsApi(this.apiClient);
    readonly logoImage = new LogoImageSettingsApi(this.apiClient);
    readonly searchFilters = new SearchFilterSettingsApi(this.apiClient);
    readonly storeLocale = new StoreLocaleSettingsApi(this.apiClient);
    readonly storeProfile = new StoreProfileSettingsApi(this.apiClient);
    readonly storefrontProduct = new StorefrontProductSettingsApi(
        this.apiClient
    );
    readonly storefrontRobotsTxt = new StorefrontRobotsTxtSettingsApi(
        this.apiClient
    );
    readonly storefrontSearch = new StorefrontSearchSettingsApi(this.apiClient);
    readonly storefrontSecurity = new StorefrontSecuritySettingsApi(
        this.apiClient
    );
    readonly storefrontSeo = new StorefrontSeoSettingsApi(this.apiClient);
    readonly storefrontStatus = new StorefrontStatusSettingsApi(this.apiClient);
}
