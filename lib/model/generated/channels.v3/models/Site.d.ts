import type { Url } from './Url';
export type Site = {
    id?: number;
    /**
     * The fully qualified URL (including host and scheme) where this site is hosted. All URLs generated for this site will be appended to this.
     */
    url?: string;
    /**
     * The channel to which this site is attached. Each site belongs to a single channel, and each channel can have either zero or more sites.
     */
    channel_id?: number;
    /**
     * The date-time that this site was created, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    created_at?: string;
    /**
     * The date-time that this site was last updated, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    updated_at?: string;
    /**
     * Indicates if a private/dedicated SSL is installed on this site, or if it's using shared SSL.
     */
    ssl_status?: Site.ssl_status;
    /**
     * All URLs that belong to the site, including `primary`, `canonical`, and `checkout` URLs.
     */
    urls?: Array<Url>;
    /**
     * Indicates whether the channel uses a custom checkout domain. When `false`, the checkout domain falls back to the default channel’s primary URL.
     */
    is_checkout_url_customized?: boolean;
};
export declare namespace Site {
    /**
     * Indicates if a private/dedicated SSL is installed on this site, or if it's using shared SSL.
     */
    enum ssl_status {
        DEDICATED = "dedicated",
        SHARED = "shared"
    }
}
