export type CustomAppSections = Array<{
    /**
     * Text displayed to the merchant
     */
    title?: string;
    /**
     * Value used in the `section` query param
     */
    query_path?: string;
}>;
