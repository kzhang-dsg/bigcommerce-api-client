import { ApiClient } from "../api-client";
import { Count, Limit } from "../model/common";
import { redirect } from "../model/generated/store_content.v2";

export class RedirectApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllRedirects<T extends redirect>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            "/v2/redirects",
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createRedirect<T extends redirect>(redirect: T): Promise<T> {
        const response = await this.apiClient.post("/v2/redirects", redirect);
        return response.data;
    }

    async deleteRedirects(): Promise<void> {
        await this.apiClient.delete("/v2/redirects");
    }

    async getRedirect<T extends redirect>(redirectId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/redirects/${redirectId}`
        );
        return response.data;
    }

    async updateRedirect<T extends redirect>(
        redirectId: number,
        redirect: T
    ): Promise<T> {
        const response = await this.apiClient.put(
            `/v2/redirects/${redirectId}`,
            redirect
        );
        return response.data;
    }

    async deleteRedirect(redirectId: number): Promise<void> {
        await this.apiClient.delete(`/v2/redirects/${redirectId}`);
    }

    async getRedirectsCount<T extends Count>(): Promise<T> {
        const response = await this.apiClient.get("/v2/redirects/count");
        return response.data;
    }
}
