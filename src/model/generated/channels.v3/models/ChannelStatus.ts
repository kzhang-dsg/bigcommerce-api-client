/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The status of the channel; channel `type`, `platform`, and `status` must be a [valid combination](/api-reference/store-management/channels#status). `terminated` is not valid for `PUT` or `POST` requests. `deleted` is not valid for `POST` requests.
 */
export enum ChannelStatus {
    ACTIVE = 'active',
    PRELAUNCH = 'prelaunch',
    INACTIVE = 'inactive',
    CONNECTED = 'connected',
    DISCONNECTED = 'disconnected',
    ARCHIVED = 'archived',
    DELETED = 'deleted',
    TERMINATED = 'terminated',
}
