import type { CategoryDataPOST } from './CategoryDataPOST';
import type { ParentIdCreateData } from './ParentIdCreateData';
import type { TreeIdCreateData } from './TreeIdCreateData';
export type CreateCategories = Array<(TreeIdCreateData & ParentIdCreateData & CategoryDataPOST)>;
