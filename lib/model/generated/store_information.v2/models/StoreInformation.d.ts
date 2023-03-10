import type { Timezone } from './Timezone';
export type StoreInformation = {
    /**
     * Unique store identifier.
     */
    id?: string;
    /**
     * Primary domain name.
     */
    domain?: string;
    /**
     * Store’s current HTTPS URL.
     */
    secure_url?: string;
    /**
     * The secure hostname of the control panel.
     */
    control_panel_base_url?: string;
    /**
     * Store's name.
     */
    name?: string;
    /**
     * Primary contact’s first name (as defined during the store sign-up process).
     */
    first_name?: string;
    /**
     * Primary contact’s last name (as defined during the store sign-up process).
     */
    last_name?: string;
    /**
     * Display address.
     */
    address?: string;
    /**
     * Country where the store is located (as defined during the store sign-up process).
     */
    country?: string;
    /**
     * Display phone number.
     */
    phone?: string;
    /**
     * Email address of the store administrator/owner.
     */
    admin_email?: string;
    /**
     * Email address for orders and fulfillment.
     */
    order_email?: string;
    timezone?: Timezone;
    /**
     * Default language code.
     */
    language?: string;
    /**
     * Default currency code
     */
    currency?: string;
    /**
     * Default symbol for values in the currency.
     */
    currency_symbol?: string;
    /**
     * Default decimal separator for values in the currency.
     */
    decimal_separator?: string;
    /**
     * Default thousands separator for values in the currency.
     */
    thousands_separator?: string;
    /**
     * Default decimal places for values in the currency.
     */
    decimal_places?: number;
    /**
     * Default position of the currency symbol (left or right).
     */
    currency_symbol_location?: string;
    /**
     * Default weight units (metric or imperial).
     */
    weight_units?: string;
    /**
     * Default dimension units (metric or imperial).
     */
    dimension_units?: string;
    /**
     * The number of decimal places.
     */
    dimension_decimal_places?: number;
    /**
     * The symbol that separates the whole numbers from the decimal points.
     */
    dimension_decimal_token?: string;
    /**
     * The symbol used to denote thousands.
     */
    'dimension_thousands_token:'?: string;
    /**
     * Name of the BigCommerce plan to which this store is subscribed.
     */
    plan_name?: string;
    /**
     * Level of the BigCommerce plan to which this store is subscribed.
     */
    plan_level?: string;
    /**
     * Industry, or vertical category, in which the business operates. (As selected from drop-down list during the store sign-up process.)
     */
    industry?: string;
    logo?: {
        url?: string;
    };
    /**
     * A Boolean value that indicates whether or not prices are entered with tax.
     */
    is_price_entered_with_tax?: boolean;
    active_comparison_modules?: Array<any>;
    /**
     * + `stencil_enabled`: `true` (boolean)
     * + `sitewidehttps_enabled`: `false` (boolean)
     * + `facebook_catalog_id` (string)
     */
    features?: {
        /**
         * What type of checkout is enabled on the store. Possible values returned are optimized, single (one page), single_customizable (one page for developers), klarna.
         */
        checkout_type?: string;
        /**
         * Id of the facebook by meta catalog. If there is none, it returns an empty string.
         */
        facebook_catalog_id?: string;
        graphql_storefront_api_enabled?: boolean;
        /**
         * Indicates whether a store is using a Stencil theme.
         */
        stencil_enabled?: boolean;
        /**
         * Indicates if there is sitewide https.
         */
        sitewidehttps_enabled?: boolean;
        /**
         * Indicates whether MSF feature flag is enabled on a store.
         *
         * Returns `true` when MSF feature flag is enabled.
         * Returns `false` when MSF feature flag is disabled.
         */
        multi_storefront_enabled?: boolean;
        shopper_consent_tracking_enabled?: boolean;
        wishlists_enabled?: boolean;
    };
    account_uuid?: string;
    default_channel_id?: number;
    default_site_id?: number;
    plan_is_trial?: boolean;
    store_id?: number;
    status?: string;
};
