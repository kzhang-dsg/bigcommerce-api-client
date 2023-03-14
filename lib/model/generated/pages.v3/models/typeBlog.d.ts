import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';
export type typeBlog = (anyTypePage & pageMeta & searchKeywords & {
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
});
