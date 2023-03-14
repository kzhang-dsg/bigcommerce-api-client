import type { anyTypePage } from './anyTypePage';
import type { searchKeywords } from './searchKeywords';
export type typeRaw = (anyTypePage & searchKeywords & {
    /**
     * HTML or variable that populates the element of this page, in default/desktop view. Required in a `POST` request if the page type is `raw`.
     *
     */
    body: string | null;
    /**
     * The MIME type of the page body.
     */
    content_type?: string;
});
