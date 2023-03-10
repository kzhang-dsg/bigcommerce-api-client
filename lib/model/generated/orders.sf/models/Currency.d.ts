/**
 * This will always be the same between cart and checkout.
 */
export type Currency = {
    /**
     * The currency name.
     */
    name?: string;
    /**
     * ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.)
     */
    code?: string;
    /**
     * The currency symbol.
     */
    symbol?: string;
    /**
     * Number of decimal places for the currency. For example, USD currency has two decimal places.
     */
    decimalPlaces?: number;
};
