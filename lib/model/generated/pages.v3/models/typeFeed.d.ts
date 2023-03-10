import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';
export type typeFeed = (anyTypePage & pageMeta & searchKeywords);
