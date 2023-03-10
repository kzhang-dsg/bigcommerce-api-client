export type CustomTemplateAssociationUpsert = {
    channel_id: number;
    entity_type: CustomTemplateAssociationUpsert.entity_type;
    entity_id: number;
    file_name: string;
};
export declare namespace CustomTemplateAssociationUpsert {
    enum entity_type {
        PRODUCT = "product",
        CATEGORY = "category",
        BRAND = "brand",
        PAGE = "page"
    }
}
