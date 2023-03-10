/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The basic locale settings for a store, used to give shopper information about languages, countries, etc.
 */
export type Locale = {
    default_shopper_language: string;
    /**
     * Determines whether to display the storefront content in the shopper's browser language or the shopper's selected default language.
     *
     * Available values:
     * * `browser` - language updates automatically based on the shopper browser language. Multiple languages are supported.
     * * `default_shopper_language` - content is displayed in a single language based on the set `default_shopper_language`. Only the selected language is supported.
     */
    shopper_language_selection_method?: Locale.shopper_language_selection_method;
    store_country?: string;
};

export namespace Locale {

    /**
     * Determines whether to display the storefront content in the shopper's browser language or the shopper's selected default language.
     *
     * Available values:
     * * `browser` - language updates automatically based on the shopper browser language. Multiple languages are supported.
     * * `default_shopper_language` - content is displayed in a single language based on the set `default_shopper_language`. Only the selected language is supported.
     */
    export enum shopper_language_selection_method {
        BROWSER = 'browser',
        DEFAULT_SHOPPER_LANGUAGE = 'default_shopper_language',
    }


}

