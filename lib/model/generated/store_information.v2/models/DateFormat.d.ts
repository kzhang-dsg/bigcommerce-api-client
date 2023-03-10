export type DateFormat = {
    /**
     * string that defines dates’ display format, in the pattern: M jS Y
     */
    display?: string;
    /**
     * string that defines the CSV export format for orders, customers, and products, in the pattern: M jS Y
     */
    export?: string;
    /**
     * string that defines dates’ extended-display format, in the pattern: M jS Y @ g:i A.
     */
    extended_display?: string;
};
