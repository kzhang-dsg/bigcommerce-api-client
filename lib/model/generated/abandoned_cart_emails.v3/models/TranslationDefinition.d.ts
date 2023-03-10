export type TranslationDefinition = {
    /**
     * Locale code for this language, such as 'en', 'en-us', 'fr-ca'.
     */
    locale: string;
    /**
     * Language keys for the template. User-defined. Should match any language keys used in the template.
     */
    keys: string;
    additionalProperties?: string;
};
