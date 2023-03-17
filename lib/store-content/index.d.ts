import { ApiClient } from "../api-client";
import { BlogPostApi } from "./blog-post-api";
import { BlogTagApi } from "./blog-tag-api";
import { PageApi } from "./page-api";
export declare class StoreContentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly blogPosts: BlogPostApi;
    readonly blogTags: BlogTagApi;
    readonly pages: PageApi;
}
