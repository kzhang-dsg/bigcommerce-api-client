import { ApiClient } from "../api-client";
import { Count, Limit } from "../model/common";
import {
    blogPost_Base_Post,
    blogPost_Full,
} from "../model/generated/store_content.v2";
import { BlogPostsQueryParams } from "../model/query/store-content";
import { appendQueryString } from "../util";

export class BlogPostApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBlogPosts<
        Params extends BlogPostsQueryParams,
        T extends blogPost_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/blog/posts", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createBlogPost<T extends blogPost_Base_Post, R extends blogPost_Full>(
        blogPost: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/blog/posts", blogPost);
        return response.data;
    }

    async deleteBlogPosts(): Promise<void> {
        await this.apiClient.delete("/v2/blog/posts");
    }

    async getBlogPost<T extends blogPost_Full>(blogPostId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/blog/posts/${blogPostId}`
        );
        return response.data;
    }

    async updateBlogPost<T extends blogPost_Base_Post, R extends blogPost_Full>(
        blogPostId: number,
        blogPost: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/blog/posts/${blogPostId}`,
            blogPost
        );
        return response.data;
    }

    async deleteBlogPost(blogPostId: number): Promise<void> {
        await this.apiClient.delete(`/v2/blog/posts/${blogPostId}`);
    }

    async getBlogPostsCount<T extends Count>(): Promise<T> {
        const response = await this.apiClient.get("/v2/blog/posts/count");
        return response.data;
    }
}
