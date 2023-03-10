/**
 * Currency Object
 */
export type currency_Base = {
    /**
     * Specifies the store’s default currency display format. For write operations, only true value is accepted. When set to true, it cannot be unset, only overridden.
     */
    is_default?: boolean;
    /**
     * 2-letter ISO Alpha-2 code for this currency’s country.
     */
    country_iso2?: string;
    /**
     * 3-letter ISO 4217 code for this currency.
     */
    currency_code: string;
    /**
     * Amount of this currency that is equivalent to one U.S. dollar.(Float, Float as String, Integer)
     */
    currency_exchange_rate: string;
    /**
     * Specifies whether to use the Open Exchange Rates service to update the currency conversion. A value of false specifies a static conversion value. auto_update only applies to non-transactional currencies.
     */
    auto_update?: boolean;
    /**
     * Specifies whether this currency’s symbol appears to the “left” or “right” of the numeric amount.
     */
    token_location: string;
    /**
     * Symbol for this currency.
     */
    token: string;
    /**
     * Symbol used as the decimal separator in this currency.
     */
    decimal_token: string;
    /**
     * Symbol used as the thousands separator in this currency.
     */
    thousands_token: string;
    /**
     * Number of decimal places to show for this currency.
     */
    decimal_places: number;
    /**
     * Name of the currency.
     */
    name: string;
    /**
     * If the currency is active on the store.
     */
    enabled?: boolean;
    /**
     * Indicates if the currency is set as transactional or not. False means display only currency
     */
    is_transactional?: boolean;
};
