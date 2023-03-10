/**
 * Common Metafield properties.
 *
 */
export type MetafieldBase_Post = {
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
     *
     */
    permission_set: MetafieldBase_Post.permission_set;
    /**
     * Namespace for the metafield, for organizational purposes.
     *
     */
    namespace: string;
    /**
     * The name of the field, for example: `location_id`, `color`.
     *
     */
    key: string;
    /**
     * The value of the field, for example: `1`, `blue`.
     *
     */
    value: string;
    /**
     * Description for the metafields.
     *
     */
    description?: string;
};
export declare namespace MetafieldBase_Post {
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
     *
     */
    enum permission_set {
        APP_ONLY = "app_only",
        READ = "read",
        WRITE = "write",
        READ_AND_SF_ACCESS = "read_and_sf_access",
        WRITE_AND_SF_ACCESS = "write_and_sf_access"
    }
}
