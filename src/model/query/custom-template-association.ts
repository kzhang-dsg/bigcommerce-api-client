export interface CustomTemplateAssociationsQueryParams {
    channel_id?: number;
    "entity_id:in"?: number[];
    type?: string;
    is_valid?: boolean;
}

export interface DeleteCustomTemplateAssociationsQueryParams {
    "id:in"?: number[];
    "entity_id:in"?: number[];
    channel_id?: number;
    type?: string;
}
