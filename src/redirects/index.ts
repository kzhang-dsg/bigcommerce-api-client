import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { RedirectRead, RedirectUpsert } from "../model/generated/redirects.v3";
import {
    DeleteRedirectsQueryParams,
    RedirectsQueryParams,
} from "../model/query/redirect";
import { appendQueryString } from "../util";

export class RedirectsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getRedirects<
        Params extends RedirectsQueryParams,
        T extends RedirectRead
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/storefront/redirects", params),
            page,
            limit
        );
        return response.data;
    }

    async upsertRedirects<T extends RedirectUpsert, R extends RedirectRead>(
        redirects: T[]
    ): Promise<PaginatedData<R>> {
        const response = await this.apiClient.put(
            "/v3/storefront/redirects",
            redirects
        );
        return response.data;
    }

    async deleteRedirects<Params extends DeleteRedirectsQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/storefront/redirects", params)
        );
    }
}
