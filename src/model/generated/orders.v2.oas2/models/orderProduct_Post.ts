/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { orderCatalogProduct_Post } from './orderCatalogProduct_Post';
import type { orderCustomProduct_Post } from './orderCustomProduct_Post';

export type orderProduct_Post = (orderCustomProduct_Post | orderCatalogProduct_Post);

