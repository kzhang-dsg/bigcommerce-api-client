/**
 * A set of carrier-specific fields that will be displayed to shoppers at checkout.
 */
export type RateOptionsSchema = Array<{
    /**
     * The internal code that represents this input field.
     */
    code: string;
    /**
     * Display name for this input field.
     */
    label: string;
    /**
     * Longer description text to be displayed as a tooltip at checkout.
     */
    description?: string;
    /**
     * Placeholder for any validation we choose to implement.
     */
    validation?: string;
    /**
     * How this input will be displayed.
     */
    type: 'date' | 'string' | 'select' | 'code';
    /**
     * A valid default value for this field.
     */
    default_value: string;
    /**
     * The list of options available for `select` type fields.
     */
    value_options?: Array<string>;
    /**
     * The set of valid date ranges for `date` type fields.
     */
    date_ranges?: Array<{
        /**
         * Value Object representing a Date.
         */
        from?: {
            date?: string;
            timezone?: string;
        };
        /**
         * Value Object representing a Date.
         */
        to?: {
            date?: string;
            timezone?: string;
        };
    }>;
}>;
