"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.script_Base = void 0;
var script_Base;
(function (script_Base) {
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     */
    let load_method;
    (function (load_method) {
        load_method["DEFAULT"] = "default";
        load_method["ASYNC"] = "async";
        load_method["DEFER"] = "defer";
    })(load_method = script_Base.load_method || (script_Base.load_method = {}));
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     */
    let location;
    (function (location) {
        location["HEAD"] = "head";
        location["FOOTER"] = "footer";
    })(location = script_Base.location || (script_Base.location = {}));
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
    let visibility;
    (function (visibility) {
        visibility["STOREFRONT"] = "storefront";
        visibility["ALL_PAGES"] = "all_pages";
        visibility["CHECKOUT"] = "checkout";
        visibility["ORDER_CONFIRMATION"] = "order_confirmation";
    })(visibility = script_Base.visibility || (script_Base.visibility = {}));
    /**
     * What type of script this is.
     *
     * `src` - a `script` tag will be generated with its `src` attribute set to the value of `src`; For scripts that use the src url. By providing a path to the script, we can optimize and serve the script tag automatically for you.
     *
     * `script_tag` - The value of `html` will be injected directly onto the page.
     * For scripts which include a raw HTML script_tag to be inserted into the page. The load_method must be default.
     */
    let kind;
    (function (kind) {
        kind["SRC"] = "src";
        kind["SCRIPT_TAG"] = "script_tag";
    })(kind = script_Base.kind || (script_Base.kind = {}));
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `uknown` when not specified. Scripts with an `uknown` consent category do not display on stores with customer cookie consent banners enabled.
     */
    let consent_category;
    (function (consent_category) {
        consent_category["ESSENTIAL"] = "essential";
        consent_category["FUNCTIONAL"] = "functional";
        consent_category["ANALYTICS"] = "analytics";
        consent_category["TARGETING"] = "targeting";
    })(consent_category = script_Base.consent_category || (script_Base.consent_category = {}));
})(script_Base = exports.script_Base || (exports.script_Base = {}));
