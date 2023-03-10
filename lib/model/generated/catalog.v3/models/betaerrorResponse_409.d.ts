import type { betaDetailedErrors } from './betaDetailedErrors';
export type betaerrorResponse_409 = ({
    code?: number;
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    type?: string;
} & {
    errors?: betaDetailedErrors;
});
