/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AvailableNormalFilter } from './AvailableNormalFilter';
import type { AvailableOtherFilter } from './AvailableOtherFilter';
import type { AvailablePriceFilter } from './AvailablePriceFilter';

export type AvailableFilter = (AvailableNormalFilter | AvailablePriceFilter | AvailableOtherFilter);

