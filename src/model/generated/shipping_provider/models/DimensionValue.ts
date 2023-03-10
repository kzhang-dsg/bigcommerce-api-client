/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Value object for a length measurement.
 */
export type DimensionValue = {
    units: DimensionValue.units;
    value: number;
};

export namespace DimensionValue {

    export enum units {
        CM = 'cm',
        IN = 'in',
    }


}

