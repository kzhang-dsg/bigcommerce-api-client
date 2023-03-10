/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnabledFilters } from './EnabledFilters';
import type { SearchFilterOverrideScopeIdentifier } from './SearchFilterOverrideScopeIdentifier';

/**
 * A new set of enabled Product Filtering filters which should display in a particular context, such as on a particular Channel, or while viewing a particular Category. Array order indicates the display order on the storefront.
 */
export type EnabledFiltersOverride = {
    data?: EnabledFilters;
    scope?: SearchFilterOverrideScopeIdentifier;
};

