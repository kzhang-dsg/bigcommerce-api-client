import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { RedirectRead, RedirectUpsert } from "../model/generated/redirects.v3";
import { DeleteRedirectsQueryParams, RedirectsQueryParams } from "../model/query/redirect";
export declare class RedirectsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getRedirects<Params extends RedirectsQueryParams, T extends RedirectRead>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertRedirects<T extends RedirectUpsert, R extends RedirectRead>(redirects: T[]): Promise<PaginatedData<R>>;
    deleteRedirects<Params extends DeleteRedirectsQueryParams>(params?: Params): Promise<void>;
}
