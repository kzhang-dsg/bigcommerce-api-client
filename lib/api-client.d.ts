import { AxiosResponse } from "axios";
import { AxiosCacheInstance, CacheRequestConfig } from "axios-cache-interceptor";
import { Config } from "./model/common";
export declare class ApiClient {
    private readonly config;
    readonly axiosInstance: AxiosCacheInstance;
    constructor(config: Config);
    enableCache(enable: boolean, ttl?: number): void;
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, page?: number, limit?: number, config?: CacheRequestConfig<D>): Promise<R>;
    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: CacheRequestConfig<D>): Promise<R>;
    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: CacheRequestConfig<D>): Promise<R>;
    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CacheRequestConfig<D>): Promise<R>;
    getResources<T>(resourceUrl: string, page?: number, limit?: number): Promise<T[]>;
    private callWithRetries;
    private setupCacheTtlConfig;
    private setupCacheInvalidationConfig;
}
