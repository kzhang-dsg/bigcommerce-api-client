import { AxiosCacheInstance } from "axios-cache-interceptor";
import { AbandonedCartEmailsApi } from "./abandoned-cart-emails";
import { AbandonedCartApi } from "./abandoned-carts";
import { ApiClient } from "./api-client";
import { CartsApi } from "./cart";
import { CatalogApi } from "./catalog";
import { ChannelsApi } from "./channels";
import { CheckoutsApi } from "./checkouts";
import { CurrenciesApi } from "./currencies";
import { CustomTemplateAssociationsApi } from "./custom-template-associations";
import { CustomersV2Api } from "./customers-v2";
import { CustomersV3Api } from "./customers-v3";
import { EmailTemplatesApi } from "./email-templates";
import { GeographyApi } from "./geography";
import { MarketingApi } from "./marketing";
import { CacheType, Config } from "./model/common";
import { OrderApi } from "./order";
import { OrderTransactionsApi } from "./order-transactions";
import { PagesApi } from "./pages";
import { PaymentMethodsApi } from "./payment-methods";
import { PaymentProcessingApi } from "./payment-processing";
import { PriceListsApi } from "./price-lists";
import { PricingApi } from "./pricing";
import { RedirectsApi } from "./redirects";
import { ScriptsApi } from "./scripts";
import { SettingsApi } from "./settings";
import { ShippingV2Api } from "./shipping-v2";
import { ShippingV3Api } from "./shipping-v3";
import { SitesApi } from "./sites";
import { StoreContentApi } from "./store-content";
import { StoreInformationApi } from "./store-information";
import { SystemLogsApi } from "./system-logs";
import { SubscribersApi } from "./subscribers";
import { TaxClassesApi } from "./tax-classes";
import { TaxPropertiesApi } from "./tax-properties";
import { TaxProviderConnectionApi } from "./tax-provider-connection";
import { TaxRatesAndZonesApi } from "./tax-rates-and-zones";
import { TaxSettingsApi } from "./tax-settings";
import { ThemesApi } from "./themes";
import { WebhooksApi } from "./webhooks";
import { WidgetsApi } from "./widgets";
import { WishlistsApi } from "./wishlists";

const DEFAULT_CONFIG: Config = {
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
        ttl: 1000 * 60 * 10, // 10 minute.
        cloneData: false,
        type: CacheType.IN_MEMORY
    },
};

export class BigCommerceApiClient {
    readonly apiClient: ApiClient;
    readonly abandonedCarts: AbandonedCartApi;
    readonly carts: CartsApi;
    readonly catalog: CatalogApi;
    readonly channels: ChannelsApi;
    readonly checkouts: CheckoutsApi;
    readonly currencies: CurrenciesApi;
    readonly customersV2: CustomersV2Api;
    readonly customersV3: CustomersV3Api;
    readonly geography: GeographyApi;
    readonly orders: OrderApi;
    readonly orderTransactions: OrderTransactionsApi;
    readonly pricing: PricingApi;
    readonly priceLists: PriceListsApi;
    readonly redirects: RedirectsApi;
    readonly scripts: ScriptsApi;
    readonly settings: SettingsApi;
    readonly shippingV3: ShippingV3Api;
    readonly shippingV2: ShippingV2Api;
    readonly sites: SitesApi;
    readonly storeInformation: StoreInformationApi;
    readonly systemLogs: SystemLogsApi;
    readonly subscribers: SubscribersApi;
    readonly taxClasses: TaxClassesApi;
    readonly taxRatesAndZones: TaxRatesAndZonesApi;
    readonly taxProperties: TaxPropertiesApi;
    readonly taxSettings: TaxSettingsApi;
    readonly wishlists: WishlistsApi;
    readonly paymentMethods: PaymentMethodsApi;
    readonly paymentProcessing: PaymentProcessingApi;
    readonly abandonedCartEmails: AbandonedCartEmailsApi;
    readonly customTemplateAssociations: CustomTemplateAssociationsApi;
    readonly emailTemplates: EmailTemplatesApi;
    readonly pages: PagesApi;
    readonly marketing: MarketingApi;
    readonly storeContent: StoreContentApi;
    readonly themes: ThemesApi;
    readonly widgets: WidgetsApi;
    readonly taxProviderConnection: TaxProviderConnectionApi;
    readonly webhooks: WebhooksApi;

    constructor(private readonly config: Config) {
        this.config = Object.assign(DEFAULT_CONFIG, this.config);

        this.apiClient = new ApiClient(this.config);
        this.abandonedCarts = new AbandonedCartApi(this.apiClient);
        this.carts = new CartsApi(this.apiClient);
        this.catalog = new CatalogApi(this.apiClient);
        this.channels = new ChannelsApi(this.apiClient);
        this.checkouts = new CheckoutsApi(this.apiClient);
        this.currencies = new CurrenciesApi(this.apiClient);
        this.customersV2 = new CustomersV2Api(this.apiClient);
        this.customersV3 = new CustomersV3Api(this.apiClient);
        this.geography = new GeographyApi(this.apiClient);
        this.orders = new OrderApi(this.apiClient);
        this.orderTransactions = new OrderTransactionsApi(this.apiClient);
        this.pricing = new PricingApi(this.apiClient);
        this.priceLists = new PriceListsApi(this.apiClient);
        this.redirects = new RedirectsApi(this.apiClient);
        this.scripts = new ScriptsApi(this.apiClient);
        this.settings = new SettingsApi(this.apiClient);
        this.shippingV3 = new ShippingV3Api(this.apiClient);
        this.shippingV2 = new ShippingV2Api(this.apiClient);
        this.sites = new SitesApi(this.apiClient);
        this.storeInformation = new StoreInformationApi(this.apiClient);
        this.systemLogs = new SystemLogsApi(this.apiClient);
        this.subscribers = new SubscribersApi(this.apiClient);
        this.taxClasses = new TaxClassesApi(this.apiClient);
        this.taxRatesAndZones = new TaxRatesAndZonesApi(this.apiClient);
        this.taxProperties = new TaxPropertiesApi(this.apiClient);
        this.taxSettings = new TaxSettingsApi(this.apiClient);
        this.wishlists = new WishlistsApi(this.apiClient);
        this.paymentMethods = new PaymentMethodsApi(this.apiClient);
        this.paymentProcessing = new PaymentProcessingApi(this.apiClient);
        this.abandonedCartEmails = new AbandonedCartEmailsApi(this.apiClient);
        this.customTemplateAssociations = new CustomTemplateAssociationsApi(
            this.apiClient
        );
        this.emailTemplates = new EmailTemplatesApi(this.apiClient);
        this.pages = new PagesApi(this.apiClient);
        this.marketing = new MarketingApi(this.apiClient);
        this.storeContent = new StoreContentApi(this.apiClient);
        this.themes = new ThemesApi(this.apiClient);
        this.widgets = new WidgetsApi(this.apiClient);
        this.taxProviderConnection = new TaxProviderConnectionApi(
            this.apiClient
        );
        this.webhooks = new WebhooksApi(this.apiClient);
    }

    async getResources<T>(
        resourceUrl: string,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        return this.apiClient.getResources<T>(resourceUrl, page, limit);
    }

    async flushCache(region?: string): Promise<void> {
        if (!this.config.cache?.enable) {
            return;
        }

        (this.apiClient.axiosInstance as AxiosCacheInstance).storage.remove(
            region || "*"
        );
    }
}
