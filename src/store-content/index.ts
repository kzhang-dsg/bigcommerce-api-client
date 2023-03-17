import { ApiClient } from "../api-client";
import { BlogPostApi } from "./blog-post-api";
import { BlogTagApi } from "./blog-tag-api";
import { PageApi } from "./page-api";

export class StoreContentApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly blogPosts = new BlogPostApi(this.apiClient);
    readonly blogTags = new BlogTagApi(this.apiClient);
    readonly pages = new PageApi(this.apiClient);
}
