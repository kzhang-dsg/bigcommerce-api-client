import { ApiClient } from "../api-client";
import { blogTags } from "../model/generated/store_content.v2";
export declare class BlogTagApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllBlogTags<T extends blogTags>(page?: number, limit?: number): Promise<T[]>;
}
