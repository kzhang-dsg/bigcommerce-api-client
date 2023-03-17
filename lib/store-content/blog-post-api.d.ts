import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { blogPost_Base_Post, blogPost_Full } from "../model/generated/store_content.v2";
import { BlogPostsQueryParams } from "../model/query/store-content";
export declare class BlogPostApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBlogPosts<Params extends BlogPostsQueryParams, T extends blogPost_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createBlogPost<T extends blogPost_Base_Post, R extends blogPost_Full>(blogPost: T): Promise<R>;
    deleteBlogPosts(): Promise<void>;
    getBlogPost<T extends blogPost_Full>(blogPostId: number): Promise<T>;
    updateBlogPost<T extends blogPost_Base_Post, R extends blogPost_Full>(blogPostId: number, blogPost: T): Promise<R>;
    deleteBlogPost(blogPostId: number): Promise<void>;
    getBlogPostsCount<T extends Count>(): Promise<T>;
}
