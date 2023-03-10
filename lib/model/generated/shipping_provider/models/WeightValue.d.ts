/**
 * Value object for a weight measurement.
 */
export type WeightValue = {
    units: WeightValue.units;
    value: number;
};
export declare namespace WeightValue {
    enum units {
        OZ = "oz",
        G = "g"
    }
}
