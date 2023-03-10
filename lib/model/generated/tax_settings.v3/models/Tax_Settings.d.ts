export type Tax_Settings = {
    /**
     * Whether prices entered on this store include a tax component or not.
     */
    tax_entered_with_prices?: boolean;
    /**
     * Settings that describe how prices display at the global level.
     */
    price_display_settings?: {
        /**
         * Whether to show prices as tax inclusive or tax exclusive in the BigCommerce control panel.
         */
        show_inclusive_in_control_panel?: boolean;
        /**
         * Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopper's tax zone for price display on invoices.
         */
        invoice_price_display_strategy?: Tax_Settings.invoice_price_display_strategy;
    };
    /**
     * Describes the fallback behavior that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until they achieve a successful result.
     */
    fallback_strategy?: Tax_Settings.fallback_strategy;
};
export declare namespace Tax_Settings {
    /**
     * Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopper's tax zone for price display on invoices.
     */
    enum invoice_price_display_strategy {
        ZONE = "ZONE",
        INCLUSIVE = "INCLUSIVE",
        EXCLUSIVE = "EXCLUSIVE"
    }
    /**
     * Describes the fallback behavior that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until they achieve a successful result.
     */
    enum fallback_strategy {
        FIXED = "FIXED",
        BASIC = "BASIC",
        DISABLE = "DISABLE"
    }
}
