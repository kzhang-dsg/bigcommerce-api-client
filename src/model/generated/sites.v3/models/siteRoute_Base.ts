/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type siteRoute_Base = {
    /**
     * The type of resource being routed to; [supported types](/api-reference/store-management/sites#route-types).
     */
    type?: siteRoute_Base.type;
    /**
     * Depending on the resource type, this can be an ID (matching a specific item), or a "*" wildcard (matching all items of that type).
     *
     * For example, a route with a type: "product" and matching: "5" will be used for the product with the ID of 5.
     */
    matching?: string;
    /**
     * The route template that will be used to generate the URL for the requested resource.
     *
     * Supports several tokens:
     * - `{id}` The **ID** of the requested item.
     * - `{slug}` The **slug** for the requested item (if available). Note: the `slug` value may contain `/` slash.
     * - `{language}` The **language** string that the client is using.
     */
    route?: string;
};

export namespace siteRoute_Base {

    /**
     * The type of resource being routed to; [supported types](/api-reference/store-management/sites#route-types).
     */
    export enum type {
        PRODUCT = 'product',
        BRAND = 'brand',
        CATEGORY = 'category',
        PAGE = 'page',
        BLOG = 'blog',
        HOME = 'home',
        CART = 'cart',
        CHECKOUT = 'checkout',
        SEARCH = 'search',
        ACCOUNT = 'account',
        LOGIN = 'login',
        RETURNS = 'returns',
        STATIC = 'static',
    }


}

