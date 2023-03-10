import type { blogPost_Base_Res } from './blogPost_Base_Res';
export type blogPost_Full = ({
    /**
     * ID of this blog post. (READ-ONLY)
     */
    id?: number;
} & blogPost_Base_Res);
