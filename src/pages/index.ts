import { ApiClient } from "../api-client";
import {
    Data,
    IdInQueryParams,
    IncludeQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    Page,
    PagePut,
    PagePutBulk,
    typeBlog,
    typeContactForm,
    typeFeed,
    typeLink,
    typePage,
    typeRaw,
} from "../model/generated/pages.v3";
import { PagesQueryParams } from "../model/query/page";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 50;

export class PagesApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getPages<
        Params extends PagesQueryParams,
        T extends
            | typePage
            | typeBlog
            | typeContactForm
            | typeFeed
            | typeRaw
            | typeLink
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/content/pages", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createPage<
        Params extends IncludeQueryParams,
        T extends Page,
        R extends
            | typePage
            | typeBlog
            | typeContactForm
            | typeFeed
            | typeRaw
            | typeLink
    >(page: T, params?: Params): Promise<Data<R>> {
        const response = await this.apiClient.post(
            appendQueryString("/v3/content/pages", params),
            page
        );
        return response.data;
    }

    async updatePages<
        Params extends IncludeQueryParams,
        T extends PagePutBulk,
        R extends
            | typePage
            | typeBlog
            | typeContactForm
            | typeFeed
            | typeRaw
            | typeLink
    >(pages: T | T[], params?: Params): Promise<PaginatedData<R>> {
        if (Array.isArray(pages)) {
            let result: PaginatedData<R> = { data: [], meta: {} };
            for (let i = 0; i < pages.length; i += MAX_BATCH_SIZE) {
                const response = await this.apiClient.put(
                    appendQueryString("/v3/content/pages", params),
                    pages.slice(i, i + MAX_BATCH_SIZE)
                );
                result.data = result.data?.concat(response.data.data);
            }

            return result;
        } else {
            const response = await this.apiClient.put(
                appendQueryString("/v3/content/pages", params),
                pages
            );

            return response.data;
        }
    }

    async deletePages<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/content/pages", params)
        );
    }

    async getPage<Params extends IncludeQueryParams, T extends Page>(
        pageId: number,
        params?: Params
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/content/pages/${pageId}`, params)
        );
        return response.data;
    }

    async updatePage<
        Params extends IncludeQueryParams,
        T extends PagePut,
        R extends Page
    >(pageId: number, page: T, params?: Params): Promise<PaginatedData<R>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/content/pages/${pageId}`, params),
            page
        );
        return response.data;
    }

    async deletePage(pageId: number): Promise<void> {
        await this.apiClient.delete(`/v3/content/pages/${pageId}`);
    }
}
