export type CategoryNode = {
    id?: number;
    parent_id?: number;
    depth?: number;
    path?: Array<number>;
    name?: string;
    is_visible?: boolean;
    children?: Array<CategoryNode>;
};
