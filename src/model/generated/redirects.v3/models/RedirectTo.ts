/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RedirectTo = {
    type?: RedirectTo.type;
    entity_id?: number;
    url?: string;
};

export namespace RedirectTo {

    export enum type {
        PRODUCT = 'product',
        BRAND = 'brand',
        CATEGORY = 'category',
        PAGE = 'page',
        POST = 'post',
        URL = 'url',
    }


}

