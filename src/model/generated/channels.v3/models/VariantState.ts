/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The state of the channel listing variant.
 */
export enum VariantState {
    ACTIVE = 'active',
    DISABLED = 'disabled',
    ERROR = 'error',
    PENDING = 'pending',
    PENDING_DISABLE = 'pending_disable',
    PENDING_DELETE = 'pending_delete',
    QUEUED = 'queued',
    REJECTED = 'rejected',
    SUBMITTED = 'submitted',
    DELETED = 'deleted',
}
