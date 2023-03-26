import type { webhook_Base } from './webhook_Base';
export type webhook_Full = (webhook_Base & {
    /**
     * ID of the webhook.
     */
    id?: number;
    /**
     * Client ID, unique to the store or app.
     */
    client_id?: string;
    /**
     * Permanent ID of the BigCommerce store.
     */
    store_hash?: string;
    /**
     * Time when the webhook was created.
     */
    created_at?: number;
    /**
     * Time when the webhook was updated.
     */
    updated_at?: number;
});
