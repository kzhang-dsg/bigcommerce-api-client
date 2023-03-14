import type { anyTypePage } from './anyTypePage';
import type { pageMeta } from './pageMeta';
import type { searchKeywords } from './searchKeywords';
export type typeFeed = (anyTypePage & pageMeta & searchKeywords & {
    /**
     * The URL of the RSS feed. Required in a `POST` request if the page type is `rss_feed`.
     *
     */
    feed: string;
});
