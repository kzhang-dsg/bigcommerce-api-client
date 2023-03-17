import { ApiClient } from "../api-client";
import { Data, IdInQueryParams, IncludeQueryParams, PaginatedData } from "../model/common";
import { Page, PagePut, PagePutBulk, typeBlog, typeContactForm, typeFeed, typeLink, typePage, typeRaw } from "../model/generated/pages.v3";
import { PagesQueryParams } from "../model/query/page";
export declare class PagesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getPages<Params extends PagesQueryParams, T extends typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createPage<Params extends IncludeQueryParams, T extends Page, R extends typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink>(page: T, params?: Params): Promise<Data<R>>;
    updatePages<Params extends IncludeQueryParams, T extends PagePutBulk, R extends typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink>(pages: T | T[], params?: Params): Promise<PaginatedData<R>>;
    deletePages<Params extends IdInQueryParams>(params?: Params): Promise<void>;
    getPage<Params extends IncludeQueryParams, T extends Page>(pageId: number, params?: Params): Promise<PaginatedData<T>>;
    updatePage<Params extends IncludeQueryParams, T extends PagePut, R extends Page>(pageId: number, page: T, params?: Params): Promise<PaginatedData<R>>;
    deletePage(pageId: number): Promise<void>;
}
