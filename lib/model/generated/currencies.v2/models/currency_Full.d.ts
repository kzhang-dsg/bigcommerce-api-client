import type { currency_Base } from './currency_Base';
export type currency_Full = (currency_Base & {
    /**
     * ID of the currency. Read only.
     */
    readonly id?: number;
    /**
     * Date the currency was last updated, created or modified.
     */
    last_updated?: string;
});
