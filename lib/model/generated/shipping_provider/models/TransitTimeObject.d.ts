/**
 * Value object for the length of time in transit.
 */
export type TransitTimeObject = {
    units?: TransitTimeObject.units;
    duration?: number;
};
export declare namespace TransitTimeObject {
    enum units {
        BUSINESS_DAYS = "BUSINESS_DAYS",
        DAYS = "DAYS",
        HOURS = "HOURS"
    }
}
