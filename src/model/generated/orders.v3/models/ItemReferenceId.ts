/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ItemReferenceId = {
    /**
     * The reference type
     */
    type: ItemReferenceId.type;
    /**
     * The value identifying the returned item
     */
    value: string;
};

export namespace ItemReferenceId {

    /**
     * The reference type
     */
    export enum type {
        ORDER_PRODUCT = 'ORDER_PRODUCT',
    }


}

