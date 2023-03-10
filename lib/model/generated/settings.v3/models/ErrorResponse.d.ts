import type { BaseError } from './BaseError';
import type { DetailedErrors } from './DetailedErrors';
export type ErrorResponse = (BaseError & {
    errors?: DetailedErrors;
});
