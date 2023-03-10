export type Url = {
    /**
     * URL of site.
     */
    url?: string;
    /**
     * Specifies the URL type.
     */
    type?: Url.type;
    /**
     * The date-time that this URL was created, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    created_at?: string;
    /**
     * The date-time that this URL was last updated, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    updated_at?: string;
};
export declare namespace Url {
    /**
     * Specifies the URL type.
     */
    enum type {
        PRIMARY = "primary",
        CANONICAL = "canonical",
        CHECKOUT = "checkout"
    }
}
