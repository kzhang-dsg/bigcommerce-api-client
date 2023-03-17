import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { redirect } from "../model/generated/store_content.v2";
export declare class RedirectApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllRedirects<T extends redirect>(page?: number, limit?: number): Promise<T[]>;
    createRedirect<T extends redirect>(redirect: T): Promise<T>;
    deleteRedirects(): Promise<void>;
    getRedirect<T extends redirect>(redirectId: number): Promise<T>;
    updateRedirect<T extends redirect>(redirectId: number, redirect: T): Promise<T>;
    deleteRedirect(redirectId: number): Promise<void>;
    getRedirectsCount<T extends Count>(): Promise<T>;
}
