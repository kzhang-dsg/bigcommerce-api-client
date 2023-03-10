/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';

/**
 * Schema for a Pages V3 page with `type: page`
 *
 */
export type typePage = (anyTypePage & pageMeta & searchKeywords);

