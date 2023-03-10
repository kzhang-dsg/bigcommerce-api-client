/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { widgetSchema } from './widgetSchema';

export type widgetTemplate_Post = {
    /**
     * User-friendly name.
     */
    name: string;
    schema?: widgetSchema;
    /**
     * Handlebars HTML content. Also has access to Stencil Paper helpers.
     */
    template: string;
    /**
     * The GraphQL Storefront API query that provides widget data.
     */
    storefront_api_query?: string;
    /**
     * The id of the channel on which to create this template. Defaults to the first channel created on the store.
     */
    channel_id?: number;
};

