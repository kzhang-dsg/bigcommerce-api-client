/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryDataPUT } from './CategoryDataPUT';
import type { CategoryIdUpdateData } from './CategoryIdUpdateData';
import type { CategoryUuidData } from './CategoryUuidData';
import type { ParentIdUpdateData } from './ParentIdUpdateData';
import type { TreeIdUpdateData } from './TreeIdUpdateData';

export type UpdateCategories = Array<(TreeIdUpdateData & CategoryIdUpdateData & CategoryUuidData & ParentIdUpdateData & CategoryDataPUT)>;
