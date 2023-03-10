/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Value object for a weight measurement.
 */
export type WeightValue = {
    units: WeightValue.units;
    value: number;
};

export namespace WeightValue {

    export enum units {
        OZ = 'oz',
        G = 'g',
    }


}

