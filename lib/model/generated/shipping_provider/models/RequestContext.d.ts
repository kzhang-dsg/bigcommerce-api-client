/**
 * A collection of Reference Value objects.
 */
export type RequestContext = {
    reference_values?: Array<{
        name?: string;
        value?: string;
    }>;
};
