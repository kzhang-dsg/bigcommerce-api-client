/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnabledBrandFilter } from './EnabledBrandFilter';
import type { EnabledCategoryFilter } from './EnabledCategoryFilter';
import type { EnabledMiscFilter } from './EnabledMiscFilter';
import type { EnabledPriceFilter } from './EnabledPriceFilter';
import type { EnabledProductFilter } from './EnabledProductFilter';
import type { EnabledRatingFilter } from './EnabledRatingFilter';

export type ConfiguredFilter = (EnabledProductFilter | EnabledPriceFilter | EnabledCategoryFilter | EnabledBrandFilter | EnabledRatingFilter | EnabledMiscFilter);

