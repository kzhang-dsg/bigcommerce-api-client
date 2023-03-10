import type { BaseError } from './BaseError';
export type betaErrorResponse = (BaseError & {
    errors?: any;
});
