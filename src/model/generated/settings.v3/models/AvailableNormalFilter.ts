/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AvailableNormalFilter = {
    id?: string;
    name?: string;
    product_count?: number;
    type?: AvailableNormalFilter.type;
};

export namespace AvailableNormalFilter {

    export enum type {
        CATEGORY = 'category',
        BRAND = 'brand',
        RATING = 'rating',
        PRODUCT = 'product',
    }


}

