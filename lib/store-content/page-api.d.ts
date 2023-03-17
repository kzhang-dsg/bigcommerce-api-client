import { ApiClient } from "../api-client";
import { page_Base, page_Full } from "../model/generated/store_content.v2";
export declare class PageApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllPages<T extends page_Full>(page?: number, limit?: number): Promise<T[]>;
    createPage<T extends page_Base, R extends page_Full>(page: T): Promise<R>;
    getPage<T extends page_Full>(pageId: number): Promise<T>;
    updatePage<T extends page_Base, R extends page_Full>(pageId: number, page: T): Promise<R>;
    deletePage(pageId: number): Promise<void>;
}
