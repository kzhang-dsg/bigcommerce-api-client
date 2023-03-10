/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { categoriesTreeNode_Full } from './categoriesTreeNode_Full';
import type { metaEmpty_Full } from './metaEmpty_Full';

/**
 * Returns the categories tree, a nested lineage of the categories with parent->child relationship. The Category objects returned are simplified versions of the category objects returned in the rest of this API.
 *
 */
export type categoriesTree_Resp = {
    data?: Array<categoriesTreeNode_Full>;
    meta?: metaEmpty_Full;
};

