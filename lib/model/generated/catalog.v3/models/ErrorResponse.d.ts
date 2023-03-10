import type { MetaData } from './MetaData';
import type { MetaError } from './MetaError';
export type ErrorResponse = {
    errors?: MetaError;
    meta?: MetaData;
};
