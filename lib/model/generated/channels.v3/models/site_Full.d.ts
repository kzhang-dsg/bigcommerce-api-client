export type site_Full = {
    id?: number;
    /**
     * The Fully Qualified URL (including host and scheme) where this site is hosted. All URLs generated for this site will be appended to this.
     */
    url?: string;
    /**
     * The channel this site is attached to. Each site belongs to a single channel, and each channel can have either zero or one sites.
     */
    channel_id?: number;
    /**
     * When was this site created? RFC 3339
     */
    created_at?: string;
    /**
     * When was this site defintion last updated? RFC 3339
     */
    updated_at?: string;
    /**
     * (optional - if included) collection of routes defined for this site. Limited to 200 routes side loaded (query routes direction via `/routes` for bulk)
     */
    routes?: Array<{
        /**
         * Unique ID for this route. Required when updating an existing route
         */
        id?: number;
        /**
         * What type of resource are we routing to?
         */
        type?: 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
        /**
         * (entity_id?) For the specified type, which resources should match this route? e.g For a route with the type: "product" and matching: "5" this route would be used for the product with the ID of 5.
         *
         * Depending on the type of resource, this may be an ID (matching a specific item), or a "*" wildcard matching all items of that type.
         */
        matching?: string;
        /**
         * The route template that will be used to generate the URL for the requested resource.
         *
         * Supports several tokens:
         *
         * - {id} The ID of the requested item
         * - {slug} The slug for the requested item (if available). Note: the `slug` value may contain `/` slash
         * - {language} The language string that the client is using
         */
        route?: string;
    }>;
};
