/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomTemplateAssociationUpsert = {
    channel_id: number;
    entity_type: CustomTemplateAssociationUpsert.entity_type;
    entity_id: number;
    file_name: string;
};

export namespace CustomTemplateAssociationUpsert {

    export enum entity_type {
        PRODUCT = 'product',
        CATEGORY = 'category',
        BRAND = 'brand',
        PAGE = 'page',
    }


}

