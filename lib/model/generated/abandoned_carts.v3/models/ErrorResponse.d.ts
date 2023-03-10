/**
 * The response object containing details of an error
 */
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: any;
};
