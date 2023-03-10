export type CustomTemplateAssociation = {
    id?: number;
    channel_id?: number;
    entity_type?: CustomTemplateAssociation.entity_type;
    entity_id?: number;
    file_name?: string;
    /**
     * An invalid file name does not match with an existing custom layout file in the currently active theme for the channel. When an association is invalid the store will fallback to using the default for that entity type.
     */
    is_valid?: boolean;
    date_created?: string;
    date_modified?: string;
};
export declare namespace CustomTemplateAssociation {
    enum entity_type {
        PRODUCT = "product",
        CATEGORY = "category",
        BRAND = "brand",
        PAGE = "page"
    }
}
