import type { error_Base } from './error_Base';
/**
 * Errors during batch usage for the BigCommerce API.
 *
 */
export type resp_variantBatchError = {
    batch_errors?: Array<(error_Base & {
        errors?: any;
    })>;
};
