/**
 * Value object for a length measurement.
 */
export type DimensionValue = {
    units: DimensionValue.units;
    value: number;
};
export declare namespace DimensionValue {
    enum units {
        CM = "cm",
        IN = "in"
    }
}
