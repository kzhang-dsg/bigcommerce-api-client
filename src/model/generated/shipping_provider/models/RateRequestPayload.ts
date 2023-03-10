/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseOptions } from './BaseOptions';
import type { ConnectionOptionsInstance } from './ConnectionOptionsInstance';
import type { ZoneOptionsInstance } from './ZoneOptionsInstance';

/**
 * Payload sent to a Shipping Provider to get quotes.
 */
export type RateRequestPayload = {
    base_options: BaseOptions;
    zone_options?: ZoneOptionsInstance;
    connection_options?: ConnectionOptionsInstance;
};

