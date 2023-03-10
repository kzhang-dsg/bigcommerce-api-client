/**
 * A simple key value pairing allowing merchants to provide an additional input into a tax provider's tax calculation.
 */
export type request_item_tax_property = {
    /**
     * Used by tax providers to programmatically identify a specific calculation input.
     */
    code: string;
    /**
     * The value that will be factored into the tax provider's tax calculation rules, where supported.
     */
    value: string;
};
