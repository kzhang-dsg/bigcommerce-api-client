import type { RedirectTo } from './RedirectTo';
/**
 * Full detail of a Redirect, optionally including the full destination URL.
 */
export type RedirectRead = {
    id?: number;
    site_id?: number;
    from_path?: string;
    to?: RedirectTo;
    /**
     * Full destination URL for the redirect. Must be explicitly included via URL parameter.
     */
    to_url?: string;
};
