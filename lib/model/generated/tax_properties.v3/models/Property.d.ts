export type Property = {
    /**
     * An internal identifier used by other operations.
     */
    readonly id?: number;
    /**
     * The unique string programmatically references this unique tax property by the tax provider. Merchants should liaise with their tax provider to explore supported values and functions.
     */
    code?: string;
    /**
     * The human-readable name for this property. This string will be displayed on the Products screen as a field label.
     */
    display_name?: string;
    /**
     * Optional. Additional detail about this tax property may help guide merchants. This string will be displayed on the Products screen as a tooltip associated with the relevant field.
     */
    description?: string;
    /**
     * Datetime.
     */
    readonly created_at?: string;
    /**
     * Datetime.
     */
    readonly updated_at?: string;
};
