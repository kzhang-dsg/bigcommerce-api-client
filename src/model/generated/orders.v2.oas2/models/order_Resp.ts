/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { order_RespOnly } from './order_RespOnly';
import type { order_Shared } from './order_Shared';

/**
 * Order object returned in responses.
 */
export type order_Resp = (order_RespOnly & order_Shared);

