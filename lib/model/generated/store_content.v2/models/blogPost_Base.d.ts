import type { publishedDate } from './publishedDate';
export type blogPost_Base = {
    /**
     * Title of this blog post.
     */
    title: string;
    /**
     * URL for the public blog post.
     */
    url?: string;
    /**
     * URL to preview the blog post. (READ-ONLY)
     */
    preview_url?: string;
    /**
     * Text body of the blog post.
     */
    body: string;
    /**
     * Tags to characterize the blog post.
     */
    tags?: Array<string>;
    /**
     * Summary of the blog post. (READ-ONLY)
     */
    summary?: string;
    /**
     * Whether the blog post is published.
     */
    is_published?: boolean;
    published_date?: publishedDate;
    /**
     * Published date in `ISO 8601` format.
     */
    published_date_iso8601?: string;
    /**
     * Description text for this blog post’s `<meta/>` element.
     */
    meta_description?: string;
    /**
     * Keywords for this blog post’s `<meta/>` element.
     */
    meta_keywords?: string;
    /**
     * Name of the blog post’s author.
     */
    author?: string;
    /**
     * Local path to a thumbnail uploaded to `/product_images/` via [WebDav](https://support.bigcommerce.com/s/article/File-Access-WebDAV).
     */
    thumbnail_path?: string;
};
