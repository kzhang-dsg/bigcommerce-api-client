import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Config } from "./model/common";
export declare class ApiClient {
    private readonly config;
    readonly axiosInstance: AxiosInstance;
    constructor(config: Config);
    get<T = any, R = AxiosResponse<T>, D = any>(url: string, page?: number, limit?: number, config?: AxiosRequestConfig<D>): Promise<R>;
    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    private callWithRetries;
    private setupCacheTtlConfig;
    private setupCacheInvalidationConfig;
}
