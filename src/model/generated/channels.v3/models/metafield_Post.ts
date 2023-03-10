/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Metafield for products, categories, variants, and brands. The max number of metafields allowed on each product, category, variant, or brand is fifty. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
 */
export type metafield_Post = {
    /**
     * Namespace for the metafield, for organizational purposes. This is set by the developer.
     */
    namespace: string;
    /**
     * The name of the field.
     *
     */
    key: string;
    /**
     * The value of the field.
     *
     */
    value: string;
    /**
     * Determines the visibility and writeability of the field by other API consumers.
     *
     * |Value|Description
     * |-|-|
     * |`app_only`|Private to the app that owns the field|
     * |`read`|Visible to other API consumers|
     * |`write`|Open for reading and writing by other API consumers|
     * |`read_and_sf_access`|Visible to other API consumers, including on storefront|
     * |`write_and_sf_access`|Open for reading and writing by other API consumers, including on storefront|
     */
    permission_set: metafield_Post.permission_set;
    /**
     * Description for the metafield.
     *
     */
    description?: string;
};

export namespace metafield_Post {

    /**
     * Determines the visibility and writeability of the field by other API consumers.
     *
     * |Value|Description
     * |-|-|
     * |`app_only`|Private to the app that owns the field|
     * |`read`|Visible to other API consumers|
     * |`write`|Open for reading and writing by other API consumers|
     * |`read_and_sf_access`|Visible to other API consumers, including on storefront|
     * |`write_and_sf_access`|Open for reading and writing by other API consumers, including on storefront|
     */
    export enum permission_set {
        APP_ONLY = 'app_only',
        READ = 'read',
        WRITE = 'write',
        READ_AND_SF_ACCESS = 'read_and_sf_access',
        WRITE_AND_SF_ACCESS = 'write_and_sf_access',
    }


}

