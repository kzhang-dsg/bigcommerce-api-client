/**
 * Script properties common to `post`, `put`, and `get` requests.
 */
export type script_Base = {
    /**
     * The user-friendly name.
     */
    name?: string;
    /**
     * The user-friendly description.
     */
    description?: string;
    /**
     * An html string containing exactly one `script` tag. Only present if `kind` is `script_tag`.
     */
    html?: string;
    /**
     * The `src` attribute of the script to load. Only present if `kind` is `src`.
     */
    src?: string;
    /**
     * It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked.
     */
    auto_uninstall?: boolean;
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     */
    load_method?: script_Base.load_method;
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     */
    location?: script_Base.location;
    /**
     * Which set of pages the script should load on.
     *
     * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
     *
     * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
     *
     * `storefront`: All pages that are not `checkout` or `order_confirmation`.
     *
     *
     * For a list of all locations visit [Scripts Visibility](/api-docs/store-management/scripts#script-visibility-locations).
     */
    visibility?: script_Base.visibility;
    /**
     * What type of script this is.
     *
     * `src` - a `script` tag will be generated with its `src` attribute set to the value of `src`; For scripts that use the src url. By providing a path to the script, we can optimize and serve the script tag automatically for you.
     *
     * `script_tag` - The value of `html` will be injected directly onto the page.
     * For scripts which include a raw HTML script_tag to be inserted into the page. The load_method must be default.
     */
    kind?: script_Base.kind;
    /**
     * The client id of the API user that created this script, or blank if created by other means.
     */
    api_client_id?: string;
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `uknown` when not specified. Scripts with an `uknown` consent category do not display on stores with customer cookie consent banners enabled.
     */
    consent_category?: script_Base.consent_category;
    /**
     * Whether the script is enabled or disabled on the storefront.
     */
    enabled?: boolean;
    channel_id?: number;
};
export declare namespace script_Base {
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     */
    enum load_method {
        DEFAULT = "default",
        ASYNC = "async",
        DEFER = "defer"
    }
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     */
    enum location {
        HEAD = "head",
        FOOTER = "footer"
    }
    /**
     * Which set of pages the script should load on.
     *
     * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
     *
     * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
     *
     * `storefront`: All pages that are not `checkout` or `order_confirmation`.
     *
     *
     * For a list of all locations visit [Scripts Visibility](/api-docs/store-management/scripts#script-visibility-locations).
     */
    enum visibility {
        STOREFRONT = "storefront",
        ALL_PAGES = "all_pages",
        CHECKOUT = "checkout",
        ORDER_CONFIRMATION = "order_confirmation"
    }
    /**
     * What type of script this is.
     *
     * `src` - a `script` tag will be generated with its `src` attribute set to the value of `src`; For scripts that use the src url. By providing a path to the script, we can optimize and serve the script tag automatically for you.
     *
     * `script_tag` - The value of `html` will be injected directly onto the page.
     * For scripts which include a raw HTML script_tag to be inserted into the page. The load_method must be default.
     */
    enum kind {
        SRC = "src",
        SCRIPT_TAG = "script_tag"
    }
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `uknown` when not specified. Scripts with an `uknown` consent category do not display on stores with customer cookie consent banners enabled.
     */
    enum consent_category {
        ESSENTIAL = "essential",
        FUNCTIONAL = "functional",
        ANALYTICS = "analytics",
        TARGETING = "targeting"
    }
}
