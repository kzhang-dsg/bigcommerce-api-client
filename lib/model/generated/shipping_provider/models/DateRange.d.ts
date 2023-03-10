/**
 * Representation of a range of date objects.
 */
export type DateRange = {
    /**
     * Value Object representing a Date.
     */
    from?: {
        date?: string;
        timezone?: string;
    };
    /**
     * Value Object representing a Date.
     */
    to?: {
        date?: string;
        timezone?: string;
    };
};
