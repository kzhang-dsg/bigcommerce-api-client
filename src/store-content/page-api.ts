import { ApiClient } from "../api-client";
import { page_Base, page_Full } from "../model/generated/store_content.v2";

export class PageApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllPages<T extends page_Full>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get("/v2/pages", page, limit);
        return response.data;
    }

    async createPage<T extends page_Base, R extends page_Full>(
        page: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/pages", page);
        return response.data;
    }

    async getPage<T extends page_Full>(pageId: number): Promise<T> {
        const response = await this.apiClient.get(`/v2/pages/${pageId}`);
        return response.data;
    }

    async updatePage<T extends page_Base, R extends page_Full>(
        pageId: number,
        page: T
    ): Promise<R> {
        const response = await this.apiClient.put(`/v2/pages/${pageId}`, page);
        return response.data;
    }

    async deletePage(pageId: number): Promise<void> {
        await this.apiClient.delete(`/v2/pages/${pageId}`);
    }
}
