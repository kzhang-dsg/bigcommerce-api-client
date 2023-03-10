import type { widgetSchema } from './widgetSchema';
export type widgetTemplate_Base = {
    /**
     * The user-friendly name.
     */
    name?: string;
    schema?: widgetSchema;
    /**
     * The widget template HTML. Supports Handlebars and Paper helpers.
     */
    template?: string;
    /**
     * The GraphQL Storefront API query that provides widget data.
     */
    storefront_api_query?: string;
};
