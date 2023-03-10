/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AvailableOtherFilter = {
    id?: string;
    name?: string;
    type?: AvailableOtherFilter.type;
};

export namespace AvailableOtherFilter {

    export enum type {
        OTHER = 'other',
    }


}

