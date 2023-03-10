/**
 * Metafield for products, categories, variants, and brands; the max number of metafields allowed on each is 50. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
 */
export type metafield_Base = {
    /**
     * The name of the field, for example: `location_id`, `color`. Required for POST.
     *
     */
    key: string;
    /**
     * The value of the field, for example: `1`, `blue`. Required for POST.
     *
     */
    value: string;
    /**
     * Namespace for the metafield, for organizational purposes. This is set by the developer. Required for POST.
     *
     */
    namespace: string;
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
    permission_set: metafield_Base.permission_set;
    /**
     * Description for the metafields.
     *
     */
    description?: string;
};
export declare namespace metafield_Base {
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
    enum permission_set {
        APP_ONLY = "app_only",
        READ = "read",
        WRITE = "write",
        READ_AND_SF_ACCESS = "read_and_sf_access",
        WRITE_AND_SF_ACCESS = "write_and_sf_access"
    }
}
